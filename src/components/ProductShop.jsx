import React from "react";
import ProductInfo from "./ProductInfo";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";

const ProductShop = ({ product, onAdd }) => {
  return (
    <>
      <ProductInfo product={product} />
      <Button
        onClick={() => onAdd(product._id)}
        sx={{
          background: "yellow",
          height: 64,
          width: 1,
          margin: 0,
          padding: 0,
          borderRadius: 0,
          border: 1,
        }}
      >
        <Typography fontSize={18}>Add to cart</Typography>
        <ShoppingCartIcon sx={{ paddingLeft: 1 }} />
      </Button>
    </>
  );
};

export default ProductShop;
