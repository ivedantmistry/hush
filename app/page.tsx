import type { Metadata } from "next";
import MyPage from "./MyPage"; // Import the new content component

// 1. Add SEO and Metadata
export const metadata: Metadata = {
  title: "Hush: The future of fair rides | Vedant Mistry",
  description:
    "Documentation of the Hush ride-hailing project. A case study in Lean Startup methodology, market validation, and data-driven decision-making.",
  openGraph: {
    title: "Hush: A Data-Driven Entrepreneurial Experiment",
    description: "A case study in Lean Startup and market validation.",
    url: "https://hushcabs.com",
    siteName: "Hush Cabs",
    images: [
      {
        url: "https://res.cloudinary.com/dcwzstwur/image/upload/v1762169661/8_sc9snp.png",
        width: 1280,
        height: 720,
        alt: "Hush Business Model",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hush: A Data-Driven Entrepreneurial Experiment",
    description: "A case study in Lean Startup and market validation.",
    images: [
      "https://res.cloudinary.com/dcwzstwur/image/upload/v1762169661/8_sc9snp.png",
    ],
  },
  authors: [{ name: "Vedant Mistry" }],
  keywords: [
    "Hush",
    "Vedant Mistry",
    "Hrishikesh Singh",
    "Startup",
    "Case Study",
    "Lean Startup",
    "SSIP 2.0",
    "Ride-Hailing",
    "Market Validation",
  ],
};

export default function Page() {
  return <MyPage />;
}
