import React from "react";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import WhatsApp from "../../Images/whatsapp.svg";
import { Button, NavLink } from "react-bootstrap";
import GoogleMap from "../Google-map/GoogleMap";

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
                  Puedes comunicarte con nosotros a traves de nuestras redes
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
                <div className="contactanos__text_input_box">
                  <p className="contactanos__text_input">
                    Nombre y apellido
                    <span className="contactanos__asterisco">*</span>
                  </p>
                </div>

                <div>
                  <input
                    className="contactanos__input_box"
                    placeholder="   Ingresa tu nombre: Ej Maria Perez"
                  />
                </div>
                <div className="contactanos__text_input_box">
                  <p className="contactanos__text_input">
                    Correo Electrónico{" "}
                    <span className="contactanos__asterisco">*</span>
                  </p>
                </div>
                <div>
                  <input
                    className="contactanos__input_box"
                    placeholder="   Ingresa tu correo electrónico: maria_perez@gmail.com"
                  />
                </div>
                <div>
                  <div className="contactanos__text_input_box">
                    <p className="contactanos__text_input">
                      Mensaje<span className="contactanos__asterisco">*</span>
                    </p>
                  </div>
                  <div>
                    <textarea
                      className="contactanos__text_area_box"
                      placeholder="  Ingresa tu mensaje aquí"
                    />
                  </div>
                </div>
                <div className="contactanos__box_button_enviar">
                  <Button className="contactanos__button_enviar">
                    Enviar Formulario
                  </Button>
                </div>
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
                  Encontranos en estas direcciones:
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
