import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import "../Assets/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <Box className="footer container-fluid" style={{ height: "26vh" }}>
        <Grid container>
          <Grid xs={3} style={{ justifyContent: "center", marginTop: "20px" }}>
            <span style={{ fontSize: "40px", fontFamily: "'Baloo 2',cursive" }}>
              cak<span style={{ color: "red", fontFamily: "Itim" }}>E</span>{" "}
            </span>
            {/* <br/> */}
            <span style={{ fontSize: "14px", color: "red", fontWight: "bold" }}>
              FOOD AND DRINK
            </span>
            <br />
            <span style={{ color: "red" }}>
              <FacebookIcon />
              &nbsp;&nbsp;
              <InstagramIcon />
              &nbsp;&nbsp;
              <YouTubeIcon />
            </span>
          </Grid>
          <Grid xs={5} style={{ justifyContent: "center", marginTop: "30px" }}>
            <h5 style={{ fontFamily: "'Baloo 2',cursive", color: "red" }}>
              {" "}
              Contact Info
            </h5>
            Phone : +95978910390
            <br />
            email : cake.shop@gmail.com
          </Grid>
          <Grid xs={4} style={{ justifyContent: "center", marginTop: "30px" }}>
            <h5 style={{ fontFamily: "'Baloo 2',cursive", color: "red" }}>
              {" "}
              Customer Service
            </h5>
            About us
            <br />
            Contact us
            <br />T & C
          </Grid>
          <hr />
        </Grid>
        <Grid container>
          <Grid xs={12} className="row justify-content-center">
            Copyright ©2022 All rights reserved
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
