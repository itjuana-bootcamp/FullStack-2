import React from "react";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import ProductInfo from "./ProductInfo";
import { Box, Typography } from "@mui/material";

const ProductCart = ({ product, handleLess, handleMore }) => {
  return (
    <>
      <ProductInfo product={product} />
      <Stack direction="row">
        <Button
          onClick={() => handleLess(product._id)}
          variant="contained"
          sx={{
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          -
        </Button>
        <Box sx={{ width: .5, alignSelf: 'center' }}>
          <Typography>
            { product.qty } item{ product.qty > 1 ? 's' : ''}
          </Typography>
        </Box>
        <Button
          onClick={() => handleMore(product._id)}
          variant="contained"
          sx={{
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          +
        </Button>
      </Stack>
    </>
  );
};

export default ProductCart;
