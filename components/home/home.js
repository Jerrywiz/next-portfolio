import React from "react";

import { Box, Typography, Card, Grid, Button } from "@mui/material";

import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import ReactReadMoreReadLess from "react-read-more-read-less";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavBar from "./appBar.js";
import DanieAle from "../assets/DanieAle.png";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora Long torquent per conubia nostra,";

const home = () => {
  return (
    <Box>
      <NavBar />
      <Grid container spacing={5} sx={{ px: 15, mt: 5 }}>
        <Grid item md={6} mr={4}>
          <Typography mb={2} variant="h4">
            Daniel Ale,
          </Typography>
          <Typography className="animate-charcter" variant="h5">
            Patner & Chief technology officer Prunedge technologies
          </Typography>
          <Box mt={5}>
            <ReactReadMoreReadLess
              charLimit={100}
              readMoreText={"Read More ▼"}
              readLessText={" Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {longText}
            </ReactReadMoreReadLess>
          </Box>
          <Box mt={3}>
            <Typography>Find me on</Typography>
            <Box display="flex" sx={{ backgroundColor: "grey", width: 100 }}>
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} ml={4}>
          <Card elevation={0} sx={{ borderRadius: 8 }}>
            <Image src={DanieAle}></Image>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default home;
