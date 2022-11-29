import { Grid, Typography } from "@mui/material";

const ProductListCheckout = ({ products }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <>
      {products.map((product) => {
        return (
          <Grid item xs={12} sm={12} md={3} key={product._id} sx={{ mb: 3 }}>
            <Typography fontSize={24}>{product.name}</Typography>
            <Typography fontSize={14}>quantity {product.qty}</Typography>
            <Typography fontSize={14}>
              Unite price <strong>${product.price}</strong>
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};

export default ProductListCheckout;