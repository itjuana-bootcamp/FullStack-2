import React from "react";
import Grid from "@mui/material/Grid";
import ProductAdmin from "./ProductAdmin";

const ProductListAdmin = ({ products }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {products.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ProductAdmin product={product} key={product._id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductListAdmin;
