import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
