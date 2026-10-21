import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";
import "@/styles/style.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SDN Ngletih 1",
  description: "Website profil SDN Ngletih 1 Kota Kediri",
  icons: {
    icon: "/assets/images/logo ngletih.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className={poppins.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
