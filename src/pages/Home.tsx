import classNames from "../components/Navbar.module.css";

export function Home() {
  return (
    <div
      className="mt-4 p-5 bg-primary text-white rounded"
      style={{
        backgroundImage: `url(imgs/store2.jpg)`,
        minHeight: "300px",
        filter: "brightness(75%)",
      }}
    >
      <h1 className="display-1 ">
        <strong>Welcome to BeniQlo!</strong>
      </h1>
      <p className="lead">Clothing store for men</p>
    </div>
  );
}
