import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { FAKEDATA } from "../FakeData";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

export default function ProductDetail() {
  const [prod, setProd] = useState({});
  const navigateId = useParams();

  useEffect(() => {
    const product = FAKEDATA.products.find((item) => item.id == navigateId.id);
    setProd(product);
  }, [navigateId]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <ImageSlider photos={prod.images} />
      </Grid>
      <Grid item xs={12} lg={6} style={{ margin: "auto" }}>
        <Card elevation={3} style={{ width: "500px", margin: "auto" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {prod.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Price: ${prod.price}
            </Typography>
            <Typography variant="h5" paragraph>
              Description:
            </Typography>
            <Typography variant="body1" paragraph>
              {prod.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
