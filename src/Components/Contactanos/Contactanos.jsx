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
            <div
              style={{
                //backgroundColor: "red",
                height: "100px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1>Contactanos</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div
                style={{
                  //backgroundColor: "red",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>
                  Puedes comunicarte con nosotros a traves de nuestras redes
                  sociales:
                </p>
              </div>
              <div
                className="container"
                style={{
                  height: "100px",
                  //backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <NavLink>
                      <img
                        style={{ width: "50px" }}
                        src={Instagram}
                        alt="Instagram"
                      />
                    </NavLink>
                  </div>
                  <div className="col-md-4">
                    <NavLink>
                      <img
                        style={{ width: "50px" }}
                        src={Facebook}
                        alt="Facebook"
                      />
                    </NavLink>
                  </div>
                  <div className="col-md-4">
                    <NavLink>
                      <img
                        style={{ width: "50px" }}
                        src={WhatsApp}
                        alt="WhatsApp"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p>O déjanos un comentario en el siguiente formulario:</p>
                </div>
                <p>Nombre y apellido</p>
                <div>
                  <input
                    style={{ width: "450px", borderRadius: "5px" }}
                    placeholder="Ingrese tu nombre: Ej Maria Perez"
                  />
                </div>
                <p>Correo Electrónico</p>
                <div>
                  <input
                    style={{ width: "450px", borderRadius: "5px" }}
                    placeholder="Ingrese tu correo electrónico: maria_perez@gmail.com"
                  />
                </div>
                <div>
                  <p>Mensaje:</p>
                  <div>
                    <textarea
                      style={{
                        width: "450px",
                        height: "200px",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <Button>Enviar Formulario</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                style={{
                  //backgroundColor: "red",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1>Dirección</h1>
              </div>

              <p>
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
