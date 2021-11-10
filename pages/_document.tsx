import Document, { Html, Head, Main, NextScript } from "next/document";
import favicon from "../public/favicon.ico";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Knewave&family=Inter:wght@200;300&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
