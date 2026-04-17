import { Barlow, Instrument_Serif } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "ReliefCare – Nền tảng cứu trợ thiên tai & kết nối SOS thời gian thực",
  description:
    "Theo dõi bão lũ, gửi tín hiệu SOS, kết nối đội cứu hộ và tình nguyện viên trên bản đồ trực tiếp. ReliefCare giúp bạn ứng phó thiên tai nhanh chóng và hiệu quả.",
  keywords: "cứu trợ thiên tai, SOS, bão lũ, cứu hộ, tình nguyện viên, bản đồ trực tiếp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${barlow.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
