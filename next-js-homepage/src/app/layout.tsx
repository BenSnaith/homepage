import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

export const metadata = {
  title: "Ben Snaith",
  description: "Ben Snaith's Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
