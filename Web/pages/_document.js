import Document, { Head, Main, NextScript } from 'next/document'
import css from '../components/styles/style'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Sample Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style>{css}</style>
        </Head>
        <body className="custom_class ">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
