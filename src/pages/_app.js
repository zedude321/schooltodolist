import "@/styles/globals.css";

import { Poppins, Inter, Roboto } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "500"],
  style: "normal",
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${
        poppins.variable + " " + inter.variable + " " + roboto.variable
      }`}
    >
      <Component {...pageProps} />
    </main>
  );
}
