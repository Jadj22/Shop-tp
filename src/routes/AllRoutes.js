import { Route, Routes } from "react-router-dom"
import { ShopList, ShopCart } from "../pages/index";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ShopList />} />
        <Route path="/shopcart" element={<ShopCart />} />
    </Routes>
  );
}

export default AllRoutes;
