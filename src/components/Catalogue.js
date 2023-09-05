import React from "react";
import { FAKEDATA } from "../FakeData";
import Product from "../pages/Product";
import { useSelector } from "react-redux";

export default function Catalogue() {
  const products = useSelector((item) => item.ProductSlices);
  // console.log(products);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
      }}
    >
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {!products.length && <h1 style={{ color: "red" }}>No Product Found</h1>}
    </div>
  );
}
