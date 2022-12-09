import React from "react";
import Grid from "@mui/material/Grid";
import ProductCart from "./ProductCart";

const ProductListCart = ({ products, handleLess, handleMore }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {products.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCart
              product={product}
              handleLess={handleLess}
              handleMore={handleMore}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductListCart;
