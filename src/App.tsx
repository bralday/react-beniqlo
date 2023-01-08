import { Routes, Route } from "react-router-dom"; // for routing
import { Container } from "react-bootstrap"; // wrapping
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar /> {/* navbar component */}
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* path = path, element = component */}
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
