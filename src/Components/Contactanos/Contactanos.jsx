import React from "react";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import WhatsApp from "../../Images/whatsapp.svg";
import { Button, NavLink } from "react-bootstrap";

const Contactanos = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contactanos__title_box">
              <h1>Contactanos</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="contactanos__text_box">
                <p>
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
                  <p>O déjanos un comentario en el siguiente formulario:</p>
                </div>
                <div className="contactanos__text_input_box">
                  <p>Nombre y apellido</p>
                </div>

                <div>
                  <input
                    className="contactanos__input_box"
                    placeholder="   Ingresa tu nombre: Ej Maria Perez"
                  />
                </div>
                <div className="contactanos__text_input_box">
                  <p>Correo Electrónico</p>
                </div>
                <div>
                  <input
                    className="contactanos__input_box"
                    placeholder="   Ingresa tu correo electrónico: maria_perez@gmail.com"
                  />
                </div>
                <div>
                  <div className="contactanos__text_input_box">
                    <p>Mensaje:</p>
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contactanos__title_box">
                <h1>Dirección</h1>
              </div>

              <p className="contactanos__text_box">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                ab eum iste veritatis? Iste nostrum similique natus soluta,
                quae, facere incidunt rem a mollitia placeat, asperiores
                distinctio obcaecati in sequi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
