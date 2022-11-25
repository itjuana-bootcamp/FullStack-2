import React from "react";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import ProductInfo from "./ProductInfo";

const ProductAdmin = ({ product, handleOnEdit, handleOnDelete }) => {
  return (
    <>
      <ProductInfo product={product} />
      <Stack direction="row">
        <Button
          onClick={() => handleOnEdit(product)}
          sx={{
            background: "yellow",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          EDIT
        </Button>
        <Button
          onClick={() => handleOnDelete(product._id)}
          sx={{
            background: "red",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          DELETE
        </Button>
      </Stack>
    </>
  );
};

export default ProductAdmin;
