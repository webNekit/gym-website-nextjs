import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
// import components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// font Oswald settings
const oswald = Oswald({ 
  subsets: ["cyrillic"], 
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});
// font Roboto settings
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ['300', '400', '400', '700', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "WellFit",
  description: "Лучший фитнес-зал",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable}`}>
        <div className="__next">
          <Header />
          <main className="w-full" id="main">
            <div className="w-full" id="content-page">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
