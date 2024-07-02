
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OffConvas from "@/components/OffConvasMenue";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect } from "react";
import { useState } from "react";
export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [menuStatus, setMenuStatus] = useState('close');
  const router = useRouter();
  useEffect(() => {
    setMenuStatus('close')
  }, [router.asPath])
  return (
    <AppContext.Provider value={{ menuStatus, setMenuStatus }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <OffConvas />
    </AppContext.Provider>
  )
}
