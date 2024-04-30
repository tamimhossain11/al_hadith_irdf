import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
        <ThemeProvider enableSystem={true} attribute="class">
             (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )
        </ThemeProvider>     
    </>
  );
}

export default MyApp;
