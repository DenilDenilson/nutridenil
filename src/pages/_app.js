import "@/styles/globals.css";
import { createContext, useState } from "react";
// import localFont from "next/font/local";

// const myFont = localFont({ src: "./rotaFont/Rota-ExtraBold.otf" });

export const dataContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [dataCache, setDataCache] = useState(null);

  return (
    <dataContext.Provider value={{ dataCache, setDataCache }}>
      <Component {...pageProps} />
    </dataContext.Provider>
  );
}
