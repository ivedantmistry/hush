import type { Metadata } from "next";
import MyPage from "./MyPage";

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
        url: "https://res.cloudinary.com/dcwzstwur/image/upload/v1762195153/imageedit_3_5154585736_eejloy.png",
        width: 180,
        height: 72,
        alt: "Hush Logo",
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
      "https://res.cloudinary.com/dcwzstwur/image/upload/v1762195153/imageedit_3_5154585736_eejloy.png",
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
