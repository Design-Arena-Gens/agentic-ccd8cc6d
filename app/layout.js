export const metadata = {
  title: 'Digital Marketplace - Future of Commerce',
  description: 'Explore the next generation of digital commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
