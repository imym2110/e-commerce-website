import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ item, randomID: Math.floor(Math.random() * 100000) }));
  };

  return (
    <Card
      sx={{
        maxWidth: 330,
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
        image={item.thumbnail}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.slice(0, 60) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          sx={{ marginRight: 1 }}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          color="warning"
          component={Link}
          to={`/productdetail/${item.id}`}
          sx={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Product Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
