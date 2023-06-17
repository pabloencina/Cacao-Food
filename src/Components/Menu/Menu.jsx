import { Col, Container, Row } from "react-bootstrap";
import CardMenu from "./CardMenu";
import { dataMenu } from "../../Data/dataMenu";

function Menu() {
  return (
    <Container>
      <div
        className="d-flex justify-content-center"
        style={{
          height: "150px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Menúes</h1>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{
          height: "200px",
          alignContent: "center",
          alignItems: "center",
          //backgroundColor: "red",
        }}
      >
        <div style={{ width: "500px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            reiciendis, recusandae cum quisquam facilis ipsam deserunt, corporis
            optio perferendis dolores est doloribus soluta illum, totam
            repellendus aliquam nulla magnam. Fugit?
          </p>
        </div>
      </div>
      <div className="container">
        <Row>
          {dataMenu.map((menu) => (
            <Col key={menu.id} md={4}>
              <CardMenu key={menu.id} menu={menu} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Menu;
