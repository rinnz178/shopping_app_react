import React,{useEffect,useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import FirstSlide from "../Assets/photos/Asset 1.png";
import SecondSlide from "../Assets/photos/Asset 2.png";
import ThirdSlide from "../Assets/photos/Asset 3.png";
import "../Assets/home-img.css";
import { Box, Divider, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


const Home = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return() => {
        componentMounted = false;
      };
    };
    getProducts();
  },[]);

  const Loading = () => {
    return (
      <div style={{height:'10vh'}}>
        <Spinner animation="grow" style={{ backgroundColor: "red" }} />
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
          {filter.map((product) => {
            return (
              <>
              <Grid xs={6} sm={2} className="card_img ">
            <span>
              <CardActionArea>
                <CardMedia
                  style={{  margin: "auto", height: "250px" }}
                  component="img"
                  height="140"
                  alt="green iguana"
                  src={product.image}
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    <span className="font">
                      <span className="east_icon">{product.title.substring(0, 11)}</span>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </span>
          </Grid>
              </>
            );
          })}
      </>
    );
  };

  return (
    <div style={{ minHeight: "56vh" }}>
      <Carousel variant="danger">
        <Carousel.Item>
          <img className="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="First slide" />
        </Carousel.Item>
      </Carousel>
      <Divider />
      <Box>
        <Grid
          container
          className="bottom_line container"
          style={{ marginTop: "10px", alignContent: "center" }}
        >
          <Grid
            xs={12}
            className="font f_c "
            style={{ textAlign: "start", margin: "20px" }}
          >
            Featured Products <KeyboardDoubleArrowRightIcon />
          </Grid>
        </Grid>
      </Box>
      <Box className="container" sx={{ flexGrow: 2 }}>
        <Grid container className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
        </Grid>
      </Box>
      <Divider style={{ backgroundColor: "gray" }} />
    </div>
  );
}

export default Home;
