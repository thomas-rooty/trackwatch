import './globals.css'

export const metadata = {
  title: 'TrackWatch',
  description:
    "📺 Tells you how much of your life you've spent watching shows. Whether you're proud or horrified, we will let you know exactly how many hours you've devoted to your favorite shows, movies, and anime. The truth may be shocking, but at least you'll know! 😅👀",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
