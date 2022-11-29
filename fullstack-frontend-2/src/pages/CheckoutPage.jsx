import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";

import CheckoutForm from "../forms/CheckoutForm";
import ProductListCheckout from "../components/ProductListCheckout";

const CheckoutPage = ({ cartProducts, setCartProducts }) => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const total = cartProducts
    .map((p) => (p.qty || 0) * p.price)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  const handleOnSubmit = (checkoutInfo) => {
    console.log("checkoutInfo", checkoutInfo);
    setCartProducts([]);

    navigate("/");
  };

  return (
    <Container>
      <Paper
        sx={{
          p: "32px",
          mt: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" align="center">
          <strong>Checkout</strong>
        </Typography>

        <Grid container sx={{ mt: 1, mb: 5 }}>
          <ProductListCheckout products={cartProducts} />
          <Typography variant="h5" align="center">
            <strong>Total ${total}</strong>
          </Typography>
        </Grid>

        <Grid container sx={{ mt: 1, mb: 5 }}>
          <CheckoutForm onSubmit={handleOnSubmit} setIsValid={setIsValid} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: 2,
            display: { xs: "block", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            form="checkout-form"
            type="submit"
            disabled={!isValid}
          >
            Place order
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
