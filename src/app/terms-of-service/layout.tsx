import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - TrialLock",
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
