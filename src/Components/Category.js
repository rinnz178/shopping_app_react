import React from "react";
import Data from "../Data";
import { Grid } from "@mui/material";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
     <Grid container className="m-3 cate">
          <Grid
            xs="12"
            style={{ textAlign: "center" }}
            onClick={() => setItem(Data)}
          >
            <Grid container>
              {/* <Grid xs="1.5">
                <FontAwesomeIcon icon={faBurger} />
              </Grid> */}
              <Grid xs="10.5"> All</Grid>
            </Grid>
          </Grid>
          {/* <Grid xs="2">(2)</Grid> */}
        </Grid>
        {menuItems.map((Val, id) => {
          return (
            <Grid
              container
              style={{ flexDirection: "row" }}
              className="m-3 cate"
              onClick={() => filterItem(Val)}
              key={id}
            >
              <Grid xs="12" style={{ textAlign: "center" }}>
                <Grid container>
                  {/* <Grid xs="1.5">
                    <FontAwesomeIcon icon={faBurger} />
                  </Grid> */}
                  <Grid xs="10.5"> {Val}</Grid>
                </Grid>
              </Grid>
              {/* <Grid xs="2">(2)</Grid> */}
            </Grid>
          );
        })}
        {/* <Grid container className="m-3 cate">
          <Grid
            xs="12"
            style={{ textAlign: "center" }}
            onClick={() => setItem(Data)}
          >
            <Grid container>
              <Grid xs="10.5"> All</Grid>
            </Grid>
          </Grid>
          
        </Grid> */}
    </>
  );
};

export default Category;
