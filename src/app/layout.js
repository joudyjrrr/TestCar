import "./globals.css";
export const metadata = {
  title: "Used Cars in UAE",
  description: "Browse high-quality used cars available across UAE cities.",
  openGraph: {
    title: "Used Cars in UAE",
    description: "Browse high-quality used cars available across UAE cities.",
  },
};
export default async function LocaleLayout({ children }) {
  return (
    <html>
      <body className={` relative bg-gray-100`}>{children}</body>
    </html>
  );
}
