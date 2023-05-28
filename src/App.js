import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Category/:id" element={<Category />} />
            <Route path="/SingleProduct/:id" element={<SingleProduct />} />
            {/* <Route path=""   element={} /> */}
          </Routes>
          <NewsLetter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
