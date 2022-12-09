import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProductInfo = ({ product }) => {
  return (
    <Box sx={{ backgroundColor: "white", height: 480, border: 1 }}>
      <Box
        component="img"
        sx={{ height: 0.4, width: 1, objectFit: "cover" }}
        src={product.imageUrl}
        alt="a buffalo"
      />
      <Stack
        sx={{ height: 0.6, px: 4, width: 0.75 }}
        justifyContent="space-around"
        spacing={2}
      >
        <Stack spacing={1} sx={{ width: 1 }}>
          <Typography fontSize={24}>{product.name}</Typography>
          <Typography fontSize={24}>{product.description}</Typography>
        </Stack>
        <Stack spacing={1} sx={{ width: 1 }}>
          <Typography fontSize={16}>Price</Typography>
          <Typography fontSize={24}>{`$${product.price}`}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductInfo;
