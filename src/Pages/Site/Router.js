import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Items from "./Items";
import NotFound from "../NotFound";

const Router = () => (
  <Routes>
    <Route index element={<Items />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
