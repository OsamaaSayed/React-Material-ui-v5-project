import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

export const StyledLink = styled(Link)(() => ({
  color: "white",
  display: "block",
  cursor: "pointer",
  ":after": {
    position: "absolute",
    bottom: -5,
    left: 0,
    right: 0,
    margin: "auto",
    width: 0,
    content: '" "',
    color: "transparent",
    background: "black",
    height: 2,
    transition: "all .3s ease-in-out",
  },
  "&:hover": {
    ":after": {
      width: "100%",
    },
  },
}));
