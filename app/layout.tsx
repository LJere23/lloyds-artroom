import "./globals.css";

export const metadata = {
  title: "Lloyds ArtRoom",
  description: "Virtual art gallery showcasing custom portraits and artworks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}