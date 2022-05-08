import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/global.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </UserProvider>
  );
}

export default MyApp;
