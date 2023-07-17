import React from "react";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import WhatsApp from "../../Images/whatsapp.svg";
import { NavLink } from "react-bootstrap";
import GoogleMap from "../Google-map/GoogleMap";
import FormikSectionContactanos from "./Formik";

//import "../../Css/error.css";

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
              <div className="contactanos__icons_box">
                <div className="row">
                  <div className="col-md-4">
                    <NavLink>
                      <img
                        className="contactanos__icons"
                        src={Instagram}
                        alt="Instagram"
                      />
                    </NavLink>
                  </div>
                  <div className="col-md-4">
                    <NavLink>
                      <img
                        className="contactanos__icons"
                        src={Facebook}
                        alt="Facebook"
                      />
                    </NavLink>
                  </div>
                  <div className="col-md-4">
                    <NavLink>
                      <img
                        className="contactanos__icons"
                        src={WhatsApp}
                        alt="WhatsApp"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
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
