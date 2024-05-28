import { Col, Row } from "react-bootstrap";
import DarkVariantExample from "../Components/Slider.tsx";
import { StoreItem } from "../Components/StoreItem.tsx";
import storeItems2 from "../data/items2.json";

export default function Home() {
  return (
    <div>
      <DarkVariantExample />
      <div
        style={{
          display: "flex",
          height: "600px",
        }}
      ></div>
      <h1 className='text-center my-4'>¡Bienvenido a nuestra tienda deportiva!</h1>
      <p className='text-center my-2 fs-2'>
        Nuestros productos son de la mejor calidad y a los mejores precios. ¡No te los pierdas!
      </p>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems2.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
