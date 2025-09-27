import { Geist, Geist_Mono, Kanit, Mina } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["100","200", "300", "400","500", "600", "700", "800","900"],
  subsets: ["latin"],
  
})

export const metadata = {
  title: "Lehanann Intranet",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased h-screen w-screen bg-gradient-to-br from-zinc-50 to-zinc-200 `}
      >
        {children}
      </body>
    </html>
  );
}