
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FooterExtended from "@/components/shared/FooterExtended";


export const metadata = {
  title: "better-mediustech",
  description: "an   internship task for medius-tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body 
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <FooterExtended></FooterExtended>
      </body>
    </html>
  );
}
