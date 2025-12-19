import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Meta tags */}
        <meta name="description" content="Ethan Lam - Builder, Engineer, and Entrepreneur" />
        <meta name="theme-color" content="#0A2540" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ethan Lam" />
        <meta property="og:description" content="Builder, Engineer, and Entrepreneur" />
        <meta property="og:image" content="/frontpagePreview.png" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ethan Lam" />
        <meta name="twitter:description" content="Builder, Engineer, and Entrepreneur" />
        <meta name="twitter:image" content="/frontpagePreview.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}