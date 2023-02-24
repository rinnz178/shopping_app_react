import React,{useState} from "react";
import { Card } from "react-bootstrap";
import { Box, Grid } from "@mui/material";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

  
    const [cart, setCart] =  useState([]);

    const addToCart = (product) => {
        // console.log("Add to Cart")
        setCart([...cart, product])

    }
    
    
  return (
    <>
      {item.map(Val => {
        return (

          <Grid className="col-xs-6 col-6 col-sm-4 col-lg-4 col-md-4">
          
            <Card
              key={Val.id}
              style={{ borderRadius: "15px",textDecoration:'none'}}
              className="m-2"
            >
              <Grid container >
              <span className="bg_p">
              <Link to={`/product/${Val.id}`} >
                <Grid className="col-12">
                  <img
                    className="pro_img"
                    style={{ width: "75%" }}
                    src={Val.img}
                    alt={Val.title}
                  />
                </Grid>
                </Link>
               
                <Link to={`/product/${Val.id}`} style={{textDecoration:'none',color:'black'}}>
                <Grid className="col-12 container" >
                  <Grid className="col-12"
                    
                  >
                  <p style={{
                      // textAlign: "center",
                      marginLeft: "10px",
                      justifyContent:'center',
                      fontWeight: "1000",
                      fontSize: "20px",
                    }}>{Val.title.subString(0,12)}</p>
                    
                  </Grid>
                  </Grid>
                  </Link>
               
                  {/* <Grid xs={12} container>
                    <span
                      style={{
                        textAlign: "left",
                        marginLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {Val.desc}
                    </span>
                  </Grid> */}
                <Grid xs={12} container style={{ margin: "10px" }}>
                  <Grid
                    xs={10}
                    style={{
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "red",
                    }}
                  >
                   Price : {Val.price}
                  </Grid>
                  <Grid xs={12} >
                  
                    <FontAwesomeIcon onClick={() => addToCart(Val)}
                      className="btn shop_cart"
                      icon={faShoppingCart}

                      // id="sp_cart"
                    />
                  </Grid>
                </Grid>
                </span>
              </Grid>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default ProductCard;
