import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../store/CartSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartSlices.products);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.item.price,
    0
  );

  const renderEmptyCart = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 4,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Your cart is empty
      </Typography>
      <Button
        variant="outlined"
        component={Link}
        to="/"
        sx={{
          padding: "10px 30px",
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "#1976d2",
            color: "#fff",
          },
        }}
      >
        Continue Shopping
      </Button>
    </Box>
  );

  return (
    <body
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: "20px", background: "#fff" }}>
          <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
            Your Shopping Cart
          </Typography>
          {cartItems.length === 0 ? (
            renderEmptyCart()
          ) : (
            <Grid container spacing={3}>
              {cartItems.map((item) => (
                <Grid item key={item.randomID} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200 }}
                      image={item.item.thumbnail}
                      title={item.item.title}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {item.item.title.slice(0, 20) + "..."}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.item.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.randomID }))
                        }
                      >
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          {total > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                Total: ${total}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="checkout"
                sx={{
                  padding: "10px 30px",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </body>
  );
}
