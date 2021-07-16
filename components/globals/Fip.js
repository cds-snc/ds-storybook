import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import LanguageToggle from "./LanguageToggle";

const Fip = (props) => {
  const { t, i18n } = useTranslation("common");

  // Check if custom branding was provided, otherwise show the Government of Canada branding
  const themeCustomization = props.themeCustomization
    ? props.themeCustomization.brand
    : null;

  const logo =
    themeCustomization && themeCustomization[getProperty("logo", i18n.language)]
      ? themeCustomization[getProperty("logo", i18n.language)]
      : "/img/sig-blk-" + i18n.language + ".svg";

  const linkUrl =
    themeCustomization && themeCustomization[getProperty("url", i18n.language)]
      ? themeCustomization[getProperty("url", i18n.language)]
      : t("fip.link");

  const logoTitle =
    themeCustomization &&
    themeCustomization[getProperty("logoTitle", i18n.language)]
      ? themeCustomization[getProperty("logoTitle", i18n.language)]
      : t("fip.text");

  return (
    <div data-testid="fip" className="gc-fip">
      <div className="canada-flag">
        <a href={linkUrl} aria-label={logoTitle}>
          <img src={logo} alt={logoTitle} />
        </a>
      </div>
      <LanguageToggle />
    </div>
  );
};

Fip.propTypes = {
  themeCustomization: PropTypes.object,
};

export default Fip;
