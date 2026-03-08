import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How it Works | TrialLock",
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
