import { Route, Routes } from "react-router-dom";
import { ShopCart, ShopList } from "../src/pages/index";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ShopList />} />
        <Route path="/shopcart" element={<ShopCart />} />
    </Routes>
  );
}

export default AllRoutes;
