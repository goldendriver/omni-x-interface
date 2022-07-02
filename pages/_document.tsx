import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full bg-gray-100">
        <Head>
          <meta name="description" content="Omni-X Marketplace" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700|Inconsolata:400,600,700&display=swap"
            rel="stylesheet"
          />
          <link 
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
            rel="stylesheet" 
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
            crossOrigin="anonymous"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
