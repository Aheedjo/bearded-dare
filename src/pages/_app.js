import "../styles/globals.css";
import { AppProvider } from "../context/context";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    );
}

export default MyApp;
