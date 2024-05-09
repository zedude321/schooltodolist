import { Header } from "@/components";
import Sidebar from "@/components/sidebar";
import "@/styles/globals.css";
import { Inter, Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin", "cyrillic-ext"],
  style: "normal",
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "600", "500"],
  style: "normal",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable + " " + roboto.variable} h-screen flex`}>
      <Sidebar />
      <div className="w-full">
        <Header />
        <Component {...pageProps} />
      </div>
    </main>
  );
}
