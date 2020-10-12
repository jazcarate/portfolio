import Head from 'next/head';
import { jsonLdScriptProps } from "react-schemaorg";

import App from '../components/App';
import me from '../components/PersonSchema';


const Index = () => {
  return (
    <div id="root">
      <Head lang="en">
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#cccccc" />

        <title>Florius</title>
        <meta name="description" content="Joaquin Azcarate :: Personal Projects" />
        <meta name="keywords" content="florius, portfolio, whoami" />
        <meta name="author" content="Joaquin `Florius' Azcarate" />

        <meta itemProp="name" content="Florius" />
        <meta itemProp="description" content="Joaquin Azcarate :: Personal Projects" />
        <meta itemProp="image" content="https://florius.com.ar/summary.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FloriusWasTaken" />
        <meta name="twitter:title" content="Florius" />
        <meta name="twitter:description" content="Joaquin Azcarate :: Personal Projects" />
        <meta name="twitter:creator" content="@FloriusWasTaken" />
        <meta name="twitter:image" content="https://florius.com.ar/summary.png" />
        <meta name="twitter:image:alt" content="Joaquin Azcarate :: Personal Projects" />

        <meta property="og:title" content="Florius" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://florius.com.ar/" />
        <meta property="og:image" content="https://florius.com.ar/summary.png" />
        <meta property="og:description" content="Joaquin Azcarate :: Personal Projects" />
        <meta property="og:site_name" content="Joaquin Azcarate :: Personal Projects" />

        <script {...me} />

        <link href="https://fonts.googleapis.com/css?family=Karla|Montserrat&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link id="style-root" rel="stylesheet" />
      </Head>

      <App />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Karla", sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0 10px;
          line-height: 1.6;
          font-size: 18px;
          color: #444;
        }
        
        h1,
        h2,
        h3 {
            line-height: 1.2;
            font-family: "Montserrat", sans-serif;
        }
      `}</style>
    </div>
  )
}
export default Index;