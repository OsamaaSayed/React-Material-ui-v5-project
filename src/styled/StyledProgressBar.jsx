import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const StyledProgressBar = styled(LinearProgress)(() => ({
  height: 7,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#d9d9d9",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#1ca7ec",
  },
}));
