import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container_social_media">
        <Link className="footer__social_media_Instagram">CacaoFood</Link>
        <Link className="footer__social_media_Facebook">CacaoFood</Link>
      </div>
    </div>
  );
};

export default Footer;
