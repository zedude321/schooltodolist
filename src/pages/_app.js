import "@/styles/globals.css";
import { Poppins, Inter } from "next/font/google";
const poppins = Poppins({ 
  subsets: ["latin"],
  style: 'normal',
  weight: ['400', '600'],
  variable: '--font-poppins',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '500'],
  style: 'normal',
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable + ' ' + inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
