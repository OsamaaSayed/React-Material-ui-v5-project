import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Styledh1Typography = styled(Typography)(() => ({
  fontSize: "50px",
  fontWeight: "800",
  margin: "10px 0px",
}));

export const Styledh2Typography = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: "800",
  fontSize: "36px",
  marginTop: "20px",
  marginBottom: "10px",
}));

export const Styledh4Typography = styled(Typography)(() => ({
  color: "#1ca7ec",
  fontSize: "18px",
  marginBottom: "10px",
}));

export const StyledFeaturesBoxTitle = styled(Typography)(() => ({
  marginBottom: "10px",
  color: "white",
  fontSize: "20px",
  fontWeight: "600",
}));

export const StyledTeamBoxName = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "24px",
  marginTop: "20px",
  marginBottom: "10px",
}));

export const StyledTyporgraphy = styled(Typography)(() => ({
  marginBottom: "10px",
  color: "#888",
}));

export const StyledBlogBoxTitle = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "18px",
  fontWeight: "600",
  margin: "5px 0px",
  cursor: "pointer",
  "&:hover": { color: "#1CA7EC" },
  transition: "all 0.2s ease-in-out",
}));
