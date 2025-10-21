"use client";
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
    setFormData({ email: "", phone: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#9C9C9C" }}>
          Have a question or want to work together? Send me a message!
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            mb: 3,
            input: { color: "white" },
            label: { color: "#9C9C9C" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#3F8E00" },
              "&.Mui-focused fieldset": { borderColor: "#3F8E00" },
            },
          }}
          required
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          sx={{
            mb: 3,
            input: { color: "white" },
            label: { color: "#9C9C9C" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#3F8E00" },
              "&.Mui-focused fieldset": { borderColor: "#3F8E00" },
            },
          }}
          required
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
           sx={{
            mb: 3,
            input: { color: "white" },
            label: { color: "#9C9C9C" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#3F8E00" },
              "&.Mui-focused fieldset": { borderColor: "#3F8E00" },
            },
          }}
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#3F8E00",
            "&:hover": { bgcolor: "#4aa500" },
            py: 1.5,
            px: 5,
            fontWeight: "bold",
          }}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
