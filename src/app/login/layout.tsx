export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body className="bg-bgprimary">{children}</body>
    </>
  );
}
