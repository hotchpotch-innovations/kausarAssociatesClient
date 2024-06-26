import "../globals.css";
import Footer from "@/components/common/footer/Footer";
import MainContextProvider from "./MainContextProvider";
import HoverEffectNavbar from "@/components/common/HoverEffectNavbar";
// import { Toaster } from "react-hot-toast";
import Providers from "@/components/providers/TanstackProvider";
import ScrollProvider from "./_scrollProvider";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Kauser & Associates Ltd | Official site.",
  description: "A Hub of Corporate Law Matters in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <MainContextProvider>
        {/* <ScrollProvider> */}
        <ScrollToTop />
        <HoverEffectNavbar />
        {children}
        <Footer></Footer>
        {/* </ScrollProvider> */}
      </MainContextProvider>
      {/* <Toaster /> */}
    </Providers>
  );
}
