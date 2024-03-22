import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parkview Apartments in Lincoln, NE (Official Site)',
  description:
    'Parkview Apartments offers 1 and 2 bedroom homes with fully-equipped kitchens including a dishwasher &amp; pre-wired for DirectTV.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <link
          rel='shortcut icon'
          href='./images/icons/Parkview-Apartments-favicon.png'
        />
        <link rel='canonical' href='https://www.parkviewlincoln.com/' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Parkview Apartments in Lincoln, NE (Official Site)'
        />
        <meta
          property='og:description'
          content='Parkview Apartments offers 1 and 2 bedroom homes with fully-equipped kitchens including a dishwasher &amp; pre-wired for DirectTV.'
        />
        <meta property='og:url' content='https://www.parkviewlincoln.com/' />
        <meta property='og:site_name' content='Parkview Apartments' />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          data-minify='1'
          rel='stylesheet'
          id='font-awesome-css'
          href='./css/font-awesome.min.css'
          type='text/css'
          media='all'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
