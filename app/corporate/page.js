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
          alt: "Race Innovation",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@raceinnovation",
      title: "Race Innovation",
      description: "Join Race Innovation in pioneering AI, automation, and digital transformation on a global scale.",
      images: ["https://raceinnovation.com/assets/og-image.jpg"],
    },
    alternates: {
      canonical: "https://raceinnovation.com",
    },
  };
import Loan from "./Home.js";


export default function Page() {
 return(
  <main>
   <Loan/>
  </main>
 )
}