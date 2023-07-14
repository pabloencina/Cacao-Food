import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container_social_media">
        <Link
          title="Instagram CacaoFood"
          className="footer__social_media_Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
          CacaoFood
        </Link>
        <Link
          title="Facebook CacaoFood"
          className="footer__social_media_Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
          CacaoFood
        </Link>
      </div>
    </div>
  );
};

export default Footer;
