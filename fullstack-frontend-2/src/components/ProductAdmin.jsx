import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductAdmin = ({ product, handleOnEdit, handleOnDelete }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "gray", height: 480, boxShadow: 3 }}>
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
