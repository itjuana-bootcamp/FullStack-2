import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const cartProductsQty = cartProducts
    .map((cp) => cp.qty)
    .reduce((prev, curr) => prev + curr, 0);

  const onAdd = (id) => {
    const product = allProducts.find((p) => p._id === id);
    const tempCartProducts = Array.from(cartProducts);
    const currentProductIndex = tempCartProducts.findIndex((p) => p._id === id);

    if (currentProductIndex >= 0)
      tempCartProducts[currentProductIndex] = {
        ...tempCartProducts[currentProductIndex],
        qty: tempCartProducts[currentProductIndex].qty + 1,
      };
    else tempCartProducts.push({ ...product, qty: 1 });

    setCartProducts(tempCartProducts);
  };

  return (
    <Fragment>
      <Navbar cartProductsQty={cartProductsQty} />
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminPage
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
        <Route
          path="/"
          element={<Shop products={allProducts} onAdd={onAdd} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/cart/checkout"
          element={
            <CheckoutPage
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
