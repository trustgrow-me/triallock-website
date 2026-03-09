"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function joinWaitlist(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const email = formData.get("email") as string;
    const referredBy = formData.get("ref") as string | null;

    if (!firstName || !email) {
        return { error: "First name and email are required" };
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { error: "Please enter a valid email address" };
    }

    try {
        // Check if user already exists
        const existingEntry = await prisma.waitlistEntry.findUnique({
            where: { email },
        });

        if (existingEntry) {
            // User is already on the waitlist, just return their existing entry
            return { success: true, entryId: existingEntry.id };
        }

        // Generate unique referral code (e.g. tl_xxxxx)
        const generateReferralCode = () => {
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let result = 'tl_';
            for (let i = 0; i < 8; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        };

        let referralCode = generateReferralCode();

        // Ensure code uniqueness
        let codeExists = await prisma.waitlistEntry.findUnique({ where: { referralCode } });
        while (codeExists) {
            referralCode = generateReferralCode();
            codeExists = await prisma.waitlistEntry.findUnique({ where: { referralCode } });
        }

        // Create the new entry in a transaction to handle referrals safely
        const newEntry = await prisma.$transaction(async (tx) => {
            const entry = await tx.waitlistEntry.create({
                data: {
                    firstName,
                    email,
                    referralCode,
                    referredBy: referredBy || null,
                },
            });

            // If they were referred by someone, increment the referrer's count
            if (referredBy) {
                const referrer = await tx.waitlistEntry.findUnique({
                    where: { referralCode: referredBy }
                });

                if (referrer) {
                    await tx.waitlistEntry.update({
                        where: { id: referrer.id },
                        data: { totalReferrals: referrer.totalReferrals + 1 }
                    });
                }
            }

            return entry;
        });

        revalidatePath("/");

        return { success: true, entryId: newEntry.id };

    } catch (error) {
        console.error("Waitlist error:", error);
        return { error: "An unexpected error occurred. Please try again." };
    }
}

export async function getWaitlistStats() {
    const BASELINE = 800; // Configurable baseline
    const TARGET = 1000;

    try {
        const realCount = await prisma.waitlistEntry.count();
        const totalCount = BASELINE + realCount;

        return {
            totalCount: totalCount > TARGET ? totalCount : totalCount, // Cap or no cap
            target: TARGET,
            percentage: Math.min((totalCount / TARGET) * 100, 100).toFixed(1),
            remaining: Math.max(TARGET - totalCount, 0)
        };
    } catch (err) {
        return { totalCount: BASELINE, target: TARGET, percentage: 80, remaining: 200 };
    }
}

export async function getWaitlistEntry(id: string) {
    try {
        return await prisma.waitlistEntry.findUnique({
            where: { id }
        });
    } catch (err) {
        return null;
    }
}
