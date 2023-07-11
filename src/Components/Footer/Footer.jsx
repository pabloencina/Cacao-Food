import React from "react";
import Facebook1 from "../../Images/facebook (1).svg";
import Instagram from "../../Images/instagram-svgrepo-com.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container_social_media">
        <Link className="footer__social_media_Instagram">
          <img
            src={Instagram}
            alt="Instagram"
            className="footer__image_Facebook"
          />
          CacaoFood
        </Link>
        <Link className="footer__social_media_Facebook">
          <img
            src={Facebook1}
            alt="Facebook"
            className="footer__image_Facebook"
          />
          CacaoFood
        </Link>
      </div>
    </div>
  );
};

export default Footer;
