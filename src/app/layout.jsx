import "./globals.css";
export const metadata = {
  title: "Klima Sistemi | Ugradnja i servis klima uređaja Sarajevo",
  description:
    "Ugradnja, servis, održavanje i čišćenje klima uređaja u Sarajevu i okolini. Pronađite rješenje za ugodan dom i poslovni prostor.",
  openGraph: {
    title: "Klima Sistemi — Udobnost u svakoj sezoni",
    description: "Hladno ljeto. Topla zima. Baš kako treba.",
    locale: "bs_BA",
    type: "website",
  },
  icons: { icon: "/logo-mark.svg", apple: "/logo-mark.svg" },
};
export const viewport = { themeColor: "#033629" };
export default function RootLayout({ children }) {
  return (
    <html lang="bs">
      <body>{children}</body>
    </html>
  );
}
