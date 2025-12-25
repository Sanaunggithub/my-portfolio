import { Html, Head, Main, NextScript } from 'next/document'

// defines overall structure of every page
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript /> {/* add Nextjs script */}
      </body>
    </Html>
  )
}