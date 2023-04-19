import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LoginForm from "./LoginPage";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        bgcolor={theme.palette.primary.main}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
       <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          sx={{ ml: 2, color: "#fff" }}
        >
          MINGLE<span style={{ color: theme.palette.secondary.main }}>me</span>
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p={4}
        m="2rem auto"
        borderRadius={16}
        bgcolor="#fff"
        boxShadow={5}
      >
        <Typography
          fontWeight="bold"
          variant="h5"
          sx={{ mb: 3, textTransform: "uppercase", color: theme.palette.primary.main }}
        >
          Welcome to Mingleme!
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
