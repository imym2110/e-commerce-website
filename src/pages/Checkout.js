import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import s from "./style.module.css";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
  }

  return (
    <div className={s.body}>
      <div style={{ margin: "0px 100px" }}>
        <h1 style={{ textAlign: "center" }}>Check Out</h1>
        <form onSubmit={handleSubmit} action={<Link to="/login" />}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            variant="outlined"
            color="secondary"
            label="Address"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ mb: 4 }}
          />

          <Button variant="outlined" color="secondary" type="submit">
            Buy
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
