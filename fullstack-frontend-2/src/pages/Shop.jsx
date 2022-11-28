import Container from "@mui/system/Container";
import React from "react";
import ProductListShop from "../components/ProductListShop";

const Shop = ({ products, onAdd }) => {
  return (
    <Container maxWidth="lg" sx={{ margin: 2 }}>
      <ProductListShop products={products} onAdd={onAdd} />
    </Container>
  );
};

export default Shop;
