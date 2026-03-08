import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TrialLock - Advanced Features",
    description: "Complete Control Over Every Dollar.",
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
