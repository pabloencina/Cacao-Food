import React from "react";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import WhatsApp from "../../Images/whatsapp.svg";
import { Col, NavLink, Row } from "react-bootstrap";
import GoogleMap from "../Google-map/GoogleMap";
import FormikSectionContactanos from "./Formik";

const Contactanos = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="contactanos__title_box">
              <h1 className="contactanos__title">Contáctanos</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div>
              <div className="contactanos__text_box">
                <p className="contactanos__text">
                  Puedes comunicarte con nosotros a través de nuestras redes
                  sociales:
                </p>
              </div>
              <Col xs={12} md={12} sm={12} className="contactanos__icons_box">
                <Row xs={12} md={12} sm={12} className="contactanos__row">
                  <NavLink>
                    <img
                      className="contactanos__icons"
                      src={Instagram}
                      alt="Instagram"
                    />
                  </NavLink>
                </Row>
                <Row xs={12} md={12} sm={12} className="contactanos__row">
                  <NavLink>
                    <img
                      className="contactanos__icons"
                      src={Facebook}
                      alt="Facebook"
                    />
                  </NavLink>
                </Row>
                <Row xs={12} md={12} sm={12} className="contactanos__row">
                  <NavLink>
                    <img
                      className="contactanos__icons"
                      src={WhatsApp}
                      alt="WhatsApp"
                    />
                  </NavLink>
                </Row>
              </Col>
              <div>
                <div className="contactanos__text_box">
                  <p className="contactanos__text">
                    O déjanos un comentario en el siguiente formulario:
                  </p>
                </div>
                <FormikSectionContactanos />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="contactanos__title_box">
                <h1 className="contactanos__title">Dirección</h1>
              </div>
              <div className="contactanos__text_box">
                <p className="contactanos__text">
                  Encuéntranos en estas direcciones:
                </p>
              </div>
              <div>
                <div className="contactanos__google_map_container">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
