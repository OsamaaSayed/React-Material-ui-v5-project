import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const StyledServicesAboutGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  top: 0,
  [theme.breakpoints.up("md")]: {
    height: "100%",
    position: "absolute",
  },
  [theme.breakpoints.down("md")]: { height: "300px" }
}));

