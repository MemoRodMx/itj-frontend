import { Routes, Route } from "react-router-dom";
import Items from "./Items";
import ItemsAdd from "./ItemsForm";
import NotFound from "../NotFound";

const Router = () => (
  <Routes>
    <Route index element={<Items />} />
    <Route path="items/form/:itemId" element={<ItemsAdd />} />
    <Route path="items/form" exact element={<ItemsAdd />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
