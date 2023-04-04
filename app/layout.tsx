import './globals.css'

export const metadata = {
  title: 'TrackWatch - The Ultimate Show Tracker',
  applicationName: 'TrackWatch',
  description:
    "TrackWatch helps you monitor your favorite shows, movies, and anime, and lets you know how much of your life you've spent watching them. " +
    'Get notifications, personalized recommendations, and manage your screen time with TrackWatch.',
  keywords: ['TrackWatch', 'track', 'watch', 'tv', 'shows', 'movies', 'anime', 'recommendations', 'screen time', 'time management', 'show', 'movie', 'series'],
  colorScheme: 'dark',
  authors: [{ name: 'Thomas CARON', url: 'https://web.tcaron.fr' }],
  creator: 'Thomas CARON',
  publisher: 'Thomas CARON',
  twitter: {
    card: 'summary_large_image',
    title: 'TrackWatch - The Ultimate Show Tracker',
    description: "TrackWatch helps you monitor your favorite shows, movies, and anime, and lets you know how much of your life you've spent watching them.",
    creator: 'Thomas CARON',
    images: ['https://github.com/thomas-rooty/trackwatch/raw/main/public/img/background-meta.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
