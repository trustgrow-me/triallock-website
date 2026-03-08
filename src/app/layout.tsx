import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrialLock | Secure Virtual Cards for Free Trials",
  description: "Never pay for unwanted subscriptions again. Generate virtual credit cards for free trials. TrialLock auto-blocks charges when the trial ends.",
  keywords: ["virtual credit card", "free trial without credit card", "subscription manager", "block subscriptions", "TrialLock", "one time use card"],
  openGraph: {
    title: "TrialLock | Stop Unwanted Subscription Charges",
    description: "Generate virtual credit cards for free trials. TrialLock auto-blocks charges when the trial ends.",
    url: "https://triallock.com", /* replace with actual url later */
    siteName: "TrialLock",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWxGTHQZ2AYJTJBh3vHRUEs7HrbnlStI4fqmCqDRLgORz31jRMHV-wFw1ZMRvLQoE9NL1W384PuCSFEX7a7zQxtEelzauIPIlNXYY4wDDVpZ4A3YEc5ycCcrvRdaLVsGr8Uz-g06s1HgR-yTRFtDIvZ0igbSiVdR4cfXqGgUtRhmOOu5DUHt-dKjVv2az8_W6-wms3_YmvmL6_nCXAFR3Ee4iQbt5yoxhgppBQltS8Ic9P4CaMuxRaGOmbEYEUTNYX38fJIRMUHUY-",
        width: 1200,
        height: 630,
        alt: "TrialLock Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrialLock | Secure Virtual Cards",
    description: "Never pay for unwanted subscriptions again. Generate virtual credit cards for free trials.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDWxGTHQZ2AYJTJBh3vHRUEs7HrbnlStI4fqmCqDRLgORz31jRMHV-wFw1ZMRvLQoE9NL1W384PuCSFEX7a7zQxtEelzauIPIlNXYY4wDDVpZ4A3YEc5ycCcrvRdaLVsGr8Uz-g06s1HgR-yTRFtDIvZ0igbSiVdR4cfXqGgUtRhmOOu5DUHt-dKjVv2az8_W6-wms3_YmvmL6_nCXAFR3Ee4iQbt5yoxhgppBQltS8Ic9P4CaMuxRaGOmbEYEUTNYX38fJIRMUHUY-"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@400,0,0,24&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
