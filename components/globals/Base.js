import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Footer from "./Footer";
import PhaseBanner from "./PhaseBanner";
import SkipLink from "./SkipLink";
import Fip from "./Fip";
import { useTranslation } from "next-i18next";

const Base = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700%7CNoto+Sans:400,700&amp;display=fallback"
          rel="stylesheet"
        />
        <title>{t("title")}</title>
      </Head>
      <SkipLink />
      <div className="platform-ds">
        <header>
          <PhaseBanner />
          <Fip />
        </header>

        <main id="content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

Base.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Base;
