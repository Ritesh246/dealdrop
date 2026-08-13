import "./globals.css";
export const metadata = {
  title: "DealDrop",
  description: "Made with ❤️ by Ritesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
