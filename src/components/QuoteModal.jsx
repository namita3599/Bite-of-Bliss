import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "white",
  borderRadius: 20,
  border: "5px solid #FFB6C1", // cute pink border
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function QuoteModal({ open, handleClose, content, type }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10, color: "#FF69B4" }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ mb: 2, fontFamily: "'Quicksand', sans-serif", color: "#FF69B4" }}>
          {type === "quotes" ? "💌 Quote" : type === "advice" ? "🌟 Advice" : "🔍 Reality Check"}
        </Typography>

        <Typography variant="body1" sx={{ fontFamily: "'Quicksand', sans-serif", color: "#333", fontSize: 16 }}>
          {content}
        </Typography>
      </Box>
    </Modal>
  );
}
