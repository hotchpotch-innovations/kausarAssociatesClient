import "./globals.css";
import { Inter, Questrial, Amaranth } from "next/font/google";
import ReduxProvider from "../../provider/redux/ReduxProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Questrial",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Amaranth",
});

export const metadata = {
  title: "Kauser & Associates Ltd | Official Website",
  description: "A hub of corporation law matters in Bangladesh",
};

const RootLayout = ({ children }) => {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${questrial.variable} ${amaranth.variable}`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ReduxProvider>
  );
};

export default RootLayout;
