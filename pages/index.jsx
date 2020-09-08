import Head from 'next/head'

import App from '../components/App';


const Index = () => {
  return (
    <div id="root">
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#cccccc" />
        <meta name="description" content="Joaquin Azcarate :: Personal Projects" />
        <meta name="keywords" content="florius, portfolio, whoami" />
        <meta name="author" content="Joaquin `Florius' Azcarate" />
        <link href="https://fonts.googleapis.com/css?family=Karla|Montserrat&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link id="style-root" rel="stylesheet" />
        <title>Florius.com.ar</title>
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