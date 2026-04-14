/* eslint-disable @next/next/next-script-for-ga */
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
//import ScrollContext from "@/services/ScrollContext";
import Navbar from "@/components/global/Navbar";
import { Providers } from "@/lib/Providers";
import RouteChangeCloser from "@/services/RouteChangeCloser";
import ServiceInitializer from "@/services/ServiceInitializer";
// import RocketTop from "@/components/global/RocketTop";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Escape Room Marketer",
  description: "Escaperoom Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="escape-room-marketer page-body">
        <Providers>
          <ServiceInitializer />
          <Navbar />
          {children}
          <Footer />
          <RouteChangeCloser />
        </Providers>
      </body>
    </html>
  );
}
