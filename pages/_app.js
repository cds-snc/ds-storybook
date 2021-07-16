import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Base from "../components/globals/Base";

const MyApp = ({ Component, pageProps }) => (
  <Base>
    <Component {...pageProps} />
  </Base>
);

export default appWithTranslation(MyApp);
