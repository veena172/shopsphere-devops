import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Profile from "../pages/Profile/Profile";
import Checkout from "../pages/Checkout/Checkout";
import NotFound from "../pages/NotFound/NotFound";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import ManageProducts from "../pages/Admin/ManageProducts";

// Admin Pages
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import Orders from "../pages/Admin/Orders";
import Users from "../pages/Admin/Users";

function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/login"
        element={token ? <Navigate to="/" /> : <Login />}
      />

      <Route
        path="/signup"
        element={token ? <Navigate to="/" /> : <Signup />}
      />

      {/* Protected Routes */}

      <Route
        path="/cart"
        element={token ? <Cart /> : <Navigate to="/login" />}
      />

      <Route
        path="/wishlist"
        element={token ? <Wishlist /> : <Navigate to="/login" />}
      />

      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" />}
      />

      <Route
        path="/checkout"
        element={token ? <Checkout /> : <Navigate to="/login" />}
      />

      <Route
        path="/order-success"
        element={
          token ? (
            <OrderSuccess />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route
        path="/admin/edit-product/:id"
        element={<EditProduct />}
      />
      <Route
  path="/admin/products"
  element={<ManageProducts />}
/>
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/users" element={<Users />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;