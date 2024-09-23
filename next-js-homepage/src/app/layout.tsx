import "./globals.css";
import { Navbar } from "../components/ui/nav-implementation";
import Footer from "../components/Footer";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '300',
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
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Navbar className="top-5"/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
