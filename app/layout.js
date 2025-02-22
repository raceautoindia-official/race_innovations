import 'bootstrap/dist/css/bootstrap.css';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BootstrapClient from './components/BootstrapClient';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Race Innovation",
  description: "Race Innovation is a global leader in technology solutions, with a strong presence across multiple countries and headquarters in India.",
  keywords: "Race Innovation, technology solutions, global innovation, AI, automation, digital transformation",
  robots: "index, follow",
  openGraph: {
    title: "Race Innovation - Transforming Industries",
    description: "Race Innovation provides cutting-edge technology solutions, AI-driven automation, and digital transformation services to businesses worldwide.",
    url: "https://raceinnovation.com",
    siteName: "Race Innovation",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Race Innovation ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@raceinnovation",
    title: "Race Innovation ",
    description: "Join Race Innovation in pioneering AI, automation, and digital transformation on a global scale.",
    images: ["https://raceinnovation.com/assets/og-image.jpg"],
  },
  alternates: {
    canonical: "https://raceinnovation.com",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <BootstrapClient/>
      </body>
    </html>
  );
}
