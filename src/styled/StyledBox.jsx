import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledFeaturesBox = styled(Box)(() => ({
  padding: "50px 30px",
  backgroundColor: "transparent",
  overflow: "hidden",
  position: "relative",
  border: "solid 1px #313131",
  borderRadius: "4px",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#1ca7ec",
    ".MuiSvgIcon-root": { color: "#fff", transform: "translateY(-10px)" },
    ".MuiTypography-root": { color: "#fff" },
    transition: "all .3s ease-in-out",
  },
}));

export const StyledServicesIconBox = styled(Box)(() => ({
  backgroundColor: "#1ca7ec",
  padding: "20px",
  borderRadius: "50%",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledServicesAboutBox = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
}));

export const StyledTeamIconBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "white",
  position: "absolute",
  width: "100%",
  bottom: -25,
  left: 0,
  borderRadius: "5px",
  textAlign: "center",
  transition: "all .5s ease",
}));

export const StyledTeamImgBox = styled(Box)(() => ({
  borderRadius: "4px",
  transition: "all .5s ease",
  verticalAlign: "middle",
  width: "100%",
}));

