import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ethanmlam.github.io/" />
        
        {/* Meta tags */}
        <meta name="description" content="Ethan Lam - Technology founder, researcher, and early adopter" />
        <meta name="theme-color" content="#0A2540" />
        <meta name="author" content="Ethan Lam" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ethan Lam" />
        <meta property="og:description" content="Technology founder, researcher, and early adopter" />
        <meta property="og:image" content="https://ethanmlam.github.io/frontpagePreview.png" />
        <meta property="og:url" content="https://ethanmlam.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ethan Lam" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ethan Lam" />
        <meta name="twitter:description" content="Technology founder, researcher, and early adopter" />
        <meta name="twitter:image" content="https://ethanmlam.github.io/frontpagePreview.png" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ethan Lam",
              "url": "https://ethanmlam.github.io",
              "jobTitle": "Technology founder, researcher, and early adopter",
              "image": "https://ethanmlam.github.io/ethan_pfp.jpeg"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}