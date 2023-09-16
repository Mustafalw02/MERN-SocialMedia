import { Box } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <img
        src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png"
        alt="404"
        style={{ objectFit: "cover", overflow: "hidden" }}
      />
    </Box>
  );
};

export default PageNotFound;
