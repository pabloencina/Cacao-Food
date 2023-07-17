import React from "react";
import Instagram from "../../Images/instagram.svg";
import Facebook from "../../Images/facebook.svg";
import WhatsApp from "../../Images/whatsapp.svg";
import { Button, NavLink } from "react-bootstrap";
import GoogleMap from "../Google-map/GoogleMap";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import "../../Css/error.css";

const Contactanos = () => {
  const handleSubmit = (values) => {
    console.log(values); // Hacer algo con los valores del formulario
  };

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
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Este campo es obligatorio";
                    }
                    if (!values.email) {
                      errors.email = "Ingresa un correo electrónico válido";
                    }
                    if (!values.message) {
                      errors.message = "Este campo es obligatorio";
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="contactanos__text_input_box">
                      <p className="contactanos__text_input">
                        Nombre y apellido
                        <span className="contactanos__asterisco">*</span>
                      </p>
                    </div>
                    <div>
                      <Field
                        className="contactanos__input_box"
                        placeholder="   Ingresa tu nombre: Ej Maria Perez"
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="contactanos__text_input_box">
                      <p className="contactanos__text_input">
                        Correo Electrónico{" "}
                        <span className="contactanos__asterisco">*</span>
                      </p>
                    </div>
                    <div>
                      <Field
                        className="contactanos__input_box"
                        placeholder="  Ingresa tu correo electrónico: maria_perez@gmail.com"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <div className="contactanos__text_input_box">
                        <p className="contactanos__text_input">
                          Reseña
                          <span className="contactanos__asterisco">*</span>
                        </p>
                      </div>
                      <div>
                        <Field
                          as="textarea"
                          className="contactanos__text_area_box"
                          placeholder="   Ingresa tu reseña"
                          name="message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="contactanos__box_button_enviar">
                      <Button
                        type="submit"
                        className="contactanos__button_enviar"
                      >
                        Enviar Formulario
                      </Button>
                    </div>
                  </Form>
                </Formik>
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
