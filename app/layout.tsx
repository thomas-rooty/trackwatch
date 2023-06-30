import './globals.css'

export const metadata = {
  title: 'TrackWatch - The Ultimate Show Tracker',
  applicationName: 'TrackWatch',
  description:
    'TrackWatch is the perfect solution to keep track of your favorite TV shows. Discover how much time you have spent watching them and get personalized recommendations. Manage your screen time like a pro with TrackWatch.',
  keywords: [
    'TrackWatch',
    'track',
    'watch',
    'tv shows',
    'movies',
    'anime',
    'recommendations',
    'screen time',
    'time management',
    'series',
  ],
  colorScheme: 'dark',
  authors: [{ name: 'Thomas CARON', url: 'https://web.tcaron.fr' }],
  creator: 'Thomas CARON',
  publisher: 'Thomas CARON',
  twitter: {
    card: 'summary_large_image',
    title: 'TrackWatch - The Ultimate Show Tracker',
    description:
      'TrackWatch is the perfect solution to keep track of your favorite TV shows. Discover how much time you have spent watching them and get personalized recommendations.',
    creator: 'Thomas CARON',
    images: ['https://github.com/thomas-rooty/trackwatch/raw/main/public/img/background-meta.png'],
  },
  openGraph: {
    title: 'TrackWatch - The Ultimate Show Tracker',
    description:
      'TrackWatch is the perfect solution to keep track of your favorite TV shows. Discover how much time you have spent watching them and get personalized recommendations.',
    images: [{ url: 'https://github.com/thomas-rooty/trackwatch/raw/main/public/img/background-meta.png' }],
    siteName: 'TrackWatch',
    type: 'website',
    url: 'https://trackwatch.live/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
