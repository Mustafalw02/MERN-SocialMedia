import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Form from "./Form";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import FlexBetween from "components/FlexBetween";

const LoginPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <FlexBetween
        justifyContent={""}
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign={"center"}
        boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
      >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
        >
          Sociopedia
        </Typography>
        <IconButton sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "30px" }} />
          ) : (
            <LightMode
              sx={{ color: theme.palette.neutral.dark, fontSize: "30px" }}
            />
          )}
        </IconButton>
      </FlexBetween>

      <Box
        width={isNonMobileScreen ? "35%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius={"1.5rem"}
        backgroundColor={theme.palette.background.alt}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        }}
      >
        <Typography
          fontWeight={"500"}
          variant="h4"
          sx={{
            mb: "1.5rem",
            textAlign: "center",
          }}
        >
          Welcome to{" "}
          <span style={{ color: theme.palette.primary.main }}>Sociopedia</span>,
          the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
