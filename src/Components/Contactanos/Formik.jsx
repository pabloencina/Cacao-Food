import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";

const FormikSectionContactanos = () => {
  const handleSubmit = (values) => {
    console.log(values); // Hacer algo con los valores del formulario
  };

  return (
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
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div className="contactanos__text_input_box">
          <p className="contactanos__text_input">
            Correo Electrónico <span className="contactanos__asterisco">*</span>
          </p>
        </div>
        <div>
          <Field
            className="contactanos__input_box"
            placeholder="  Ingresa tu correo electrónico: maria_perez@gmail.com"
            name="email"
          />
          <ErrorMessage name="email" component="div" className="error" />
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
            <ErrorMessage name="message" component="div" className="error" />
          </div>
        </div>
        <div className="contactanos__box_button_enviar">
          <Button type="submit" className="contactanos__button_enviar">
            Enviar Formulario
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormikSectionContactanos;
