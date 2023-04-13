import React from "react";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

export const StyledHeaderButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "white",
  "&:hover": { color: "white", backgroundColor: "black" },
  textTransform: "capitalize",
  padding: "5px 10px",
  "& .MuiButton-endIcon": { marginLeft: "4px" },
}));

export const StyledAboutUsButton = styled(Button)(() => ({
  color: "#fff",
  marginTop: "30px",
  backgroundColor: "#1ca7ec",
  padding: "12px 35px",
  fontSize: "12px",
  opacity: "0.7",
  transition: "all .3s ease-in-out",
  "&:hover": { opacity: "1", backgroundColor: "#1ca7ec" },
}));
