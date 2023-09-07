export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body className="bg-bgsecondary">{children}</body>
    </>
  );
}
