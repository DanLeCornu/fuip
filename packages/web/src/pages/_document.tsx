import * as React from "react"
import { ColorModeScript } from "@chakra-ui/react"
import Document, { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

import { IS_PRODUCTION } from "lib/config"

export default class AppDocument extends Document {
  static getInitialProps(ctx: any) {
    return Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" key="theme-color" content="#000000" />
          <meta name="description" content="Fuck you in particular" key="description" />
          <meta property="og:title" content="Fuck you in particular" key="title" />
          <meta property="og:description" content="Fuck you in particular" key="og:description" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {IS_PRODUCTION && (
            <Script
              id="ga-tag"
              dangerouslySetInnerHTML={{
                __html: `
              <!-- Google tag (gtag.js) -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-3XQEJLV0LG"></script>
              <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-3XQEJLV0LG');
              </script>
              `,
              }}
            />
          )}
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
