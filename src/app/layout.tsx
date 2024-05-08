import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FormDataProvider } from "../components/formContext";
import ScheduleLessonButton from "../components/scheduleLessonButton";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katie's Chinese Guide",
  description: "Learn chinese with Katie!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="max-w-6xl mx-auto">
          <FormDataProvider>
            <header>
              <Navbar />
            </header>
            <div>
              {children}
            </div>
            <ScheduleLessonButton />
            <div>
              <Footer />
            </div>
          </FormDataProvider>
        </div>
      </body>
    </html>
  );
}
