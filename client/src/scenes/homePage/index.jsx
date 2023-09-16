import Navbar from "scenes/navbar";
import { Box } from "@mui/material";

const HomePage = () => {
    return (
        <Box>
            <Navbar/>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/website-launching-coming-soon-2112253-1782224.png?f=webp" alt="comming soon" style={{objectFit: "cover", overflow: "hidden"}} />
            </Box>
        </Box>
    )
};

export default HomePage;