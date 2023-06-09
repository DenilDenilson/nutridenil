import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200"
        />
      </Head>
      <body id="body-app" className="bg-gray-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
