import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TrialLock | Security Infrastructure",
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
