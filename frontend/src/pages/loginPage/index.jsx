import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LoginForm from "./LoginPage";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        bgcolor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          style={{ textTransform: "capitalize" }}
        >
          <span style={{ textTransform: "none" }}>MINGLE</span>
          <span style={{ textTransform: "uppercase" }}>me</span>
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        bgcolor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem", textTransform: "uppercase" }}
        >
          <span style={{ textTransform: "none" }}>Welcome to </span>
          <span style={{ textTransform: "capitalize" }}>Mingle</span>
          <span style={{ textTransform: "none" }}>me!</span>
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
