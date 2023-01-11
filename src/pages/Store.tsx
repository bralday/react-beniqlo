import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useStore } from "../context/StoreContext";

export function Store() {
  const { storeItems, isLoading, httpError } = useStore();
  const loadingGif = "imgs/loading.gif";

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
      <h1>Store</h1>
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
