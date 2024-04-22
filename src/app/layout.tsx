import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FormDataProvider } from "../components/formContext";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katie's Chinese Guide",
  description: "Learn chinese with Katie!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-6xl mx-auto ${inter.className}`}>
        <FormDataProvider>
          <header>
            <Navbar />
          </header>
          <div>
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </FormDataProvider> 
      </body>
    </html>
  );
}
