import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useStore } from "../context/StoreContext";
import Carousel from "react-bootstrap/Carousel";

export function Store() {
  const { storeItems, isLoading, httpError } = useStore();
  const loadingGif = "imgs/loading.gif";

  const carousel = (
    <Carousel className="pb-5">
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="imgs/store.jpg"
          alt="First slide"
          style={{
            height: "250px",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />
        <Carousel.Caption>
          <h1 className="fw-bolder">
            A single shirt has the power to spread peace
          </h1>
          <p>
            New shirt designs by well-known collaborators are available now!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="imgs/store2.jpg"
          alt="Second slide"
          style={{
            height: "250px",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />

        <Carousel.Caption>
          <h1 className="fw-bolder">
            Shaping the world with the Power of Clothing
          </h1>
          <p>What can we do in our daily lives to make a difference?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="imgs/store3.jpg"
          alt="Third slide"
          style={{
            height: "250px",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />

        <Carousel.Caption>
          <h1 className="fw-bolder">A timeless classic</h1>
          <p>Find yourself some suits and tie.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

  if (isLoading) {
    return (
      <section>
        <div className="mx-auto text-center">
          <img src={loadingGif} style={{ width: "75px", height: "75px" }} />
        </div>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <>
      {carousel}
      <h1 className="text-center fw-bolder">Store</h1>
      {/* map imported json into individual StoreItem component*/}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
