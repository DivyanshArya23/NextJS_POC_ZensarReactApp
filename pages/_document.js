import Document, { Html, Main, Head, NextScript } from "next/document";

// let isLocal = false
export default class MyDocument extends Document {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Html lang="en">
        <title>ZENSAR Hiring Challenge</title>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <meta name="referrer" content="unsafe-url" />
        <meta name="referrer" content="origin-when-crossorigin" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        ></link>

        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}
