import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing - TrialLock",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
