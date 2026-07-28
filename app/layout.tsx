import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FotoMomenty | Fotograf Legionowo, Warszawa",
  description:
    "FotoMomenty - Natalia i Piotr. Fotografujemy chrzciny, komunie, roczki, sesje rodzinne, ciążowe i narzeczeńskie. Legionowo, Warszawa i okolice.",

  keywords: [
    "fotograf Legionowo",
    "fotograf Warszawa",
    "chrzciny",
    "komunia",
    "sesja rodzinna",
    "sesja ciążowa",
    "sesja narzeczeńska",
    "fotografia okolicznościowa",
    "FotoMomenty",
  ],

  authors: [
    {
      name: "FotoMomenty",
    },
  ],

  creator: "FotoMomenty",

  openGraph: {
    title: "FotoMomenty",
    description:
      "Naturalna fotografia pełna emocji. Legionowo • Warszawa • okolice.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}