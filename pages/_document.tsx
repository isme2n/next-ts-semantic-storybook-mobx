// import 'semantic-ui-css/semantic.min.css'

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}