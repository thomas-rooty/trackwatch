import './globals.css'

export const metadata = {
  title: 'TrackWatch - The Ultimate Show Tracker',
  description:
    "TrackWatch helps you monitor your favorite shows, movies, and anime, and lets you know how much of your life you've spent watching them. Get notifications, personalized recommendations, and manage your screen time with TrackWatch.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
