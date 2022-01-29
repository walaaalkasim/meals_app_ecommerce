import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Category from "../components/Category";
import Meals from "../components/Meals";

import Ingredients from "../components/Ingredients";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Cart from "../components/Cart";
import CheckOut from "../components/CheckOut";
import Home from "../components/Home";
import SearchMeal from "../components/SearchMeal";
import Footer from "../components/Footer";
import FinishCheckout from "../components/FinishCheckout";
import OrderPlaced from "../components/OrderPlaced";
const Routings = () => (
  <Router>
    <main>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="meals" element={<Meals />} />
        <Route path="/ingredients/:id" element={<Ingredients />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="orderPlaced" element={<OrderPlaced />} />
        <Route path="/finishCheckout" element={<FinishCheckout />} />
      </Routes>
      <Footer />
    </main>
  </Router>
);

export default Routings;
