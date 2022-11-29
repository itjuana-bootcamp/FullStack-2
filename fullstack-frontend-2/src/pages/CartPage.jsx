import { useNavigate } from "react-router-dom";
import { Button, Container, Paper, Typography } from "@mui/material";
import ProductListCart from "../components/ProductListCart";

const CartPage = ({ cartProducts, setCartProducts }) => {
  const total = cartProducts
    .map((cp) => cp.qty * cp.price)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  const navigate = useNavigate();

  const handleLess = (id) => {
    const tempCartProducts = Array.from(cartProducts);
    const productIndex = tempCartProducts.findIndex((p) => p._id === id);
    if (tempCartProducts[productIndex].qty === 1)
      setCartProducts(tempCartProducts.filter((p) => p._id !== id));
    else {
      tempCartProducts[productIndex] = {
        ...tempCartProducts[productIndex],
        qty: tempCartProducts[productIndex].qty - 1,
      };
      setCartProducts(tempCartProducts);
    }
  };

  const handleMore = (id) => {
    const tempCartProducts = Array.from(cartProducts);
    const productIndex = tempCartProducts.findIndex((p) => p._id === id);

    tempCartProducts[productIndex] = {
      ...tempCartProducts[productIndex],
      qty: tempCartProducts[productIndex].qty + 1,
    };

    setCartProducts(tempCartProducts);
  };

  return (
    <Container
      sx={{
        display: "flex",
        margin: 2,
        justifyContent: "space-between",
      }}
    >
      <ProductListCart
        products={cartProducts}
        handleLess={handleLess}
        handleMore={handleMore}
      />
      <Paper
        sx={{
          height: "200px",
          p: "16px",
        }}
      >
        <Typography>
          Subtotal <strong>$ {total}</strong>
        </Typography>

        <Button
          variant="contained"
          children="Proceed to checkout"
          onClick={() => {
            navigate("checkout");
          }}
        />
      </Paper>
    </Container>
  );
};

export default CartPage;
