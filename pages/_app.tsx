import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PeopleProvider } from "../components/contexts/PeopleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PeopleProvider>
      <Component {...pageProps} />
    </PeopleProvider>
  );
}

export default MyApp;
