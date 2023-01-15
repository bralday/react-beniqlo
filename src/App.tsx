import { Routes, Route } from "react-router-dom"; // for routing
import { Container } from "react-bootstrap"; // wrapping
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <StoreProvider>
      <ShoppingCartProvider>
        <Navbar /> {/* navbar component */}
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Store />} />{" "}
            {/* path = path, element = component */}
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </StoreProvider>
  );
}

export default App;
