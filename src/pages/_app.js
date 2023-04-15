import "@/styles/globals.css";
import { createContext, useState } from "react";
// import localFont from "next/font/local";

// const myFont = localFont({ src: "./rotaFont/Rota-ExtraBold.otf" });

const dataContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [data, setData] = useState({});

  return (
    <dataContext.Provider value={data}>
      <Component {...pageProps} />;
    </dataContext.Provider>
  );
}
