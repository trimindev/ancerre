import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";

const americana = localFont({
  src: [
    { path: "./fonts/americanabt_roman.ttf", weight: "400", style: "normal" },
    { path: "./fonts/americanabt_italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/americanabt_bold.ttf", weight: "700", style: "bold" },
  ],
  variable: "--font-americana",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export { americana, nunito };
