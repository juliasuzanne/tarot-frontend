import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsIndex } from "./CardsIndex";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cards" element={<CardsIndex />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
