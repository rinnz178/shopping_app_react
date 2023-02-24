import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Grid } from "@mui/material";
import { useTranslation } from "./Languages";
import "../Assets/nav.css";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const available_langs = [
  {
    code: "en",
    label: "English (United States)",
  },
  {
    code: "my",
    label: "Myanmar (Burmese)",
  },
];
const pages = ["Home", "Shop", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = ({item}) => {
  // const [cart, setCart] = useState([]);
  // const addToCart = (product) => {
  //   // console.log("Add to Cart")
  //   setCart([...cart, product]);
  // };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  
  
  return (
    <div>
      <header className="header">
        <Box>
          <Grid container>
            <Grid xs={2} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faPhone} />
            </Grid>
            <Grid xs={8}>{t("header")}</Grid>
            <Grid xs={2}>
              <span
                data-bs-toggle="modal"
                style={{ cursor: "pointer" }}
                data-bs-target="#exampleModal"
              >
                | {t("language")} |
              </span>

              <div
                class="modal fade "
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Choose your language
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <Box
                        // pt={1}
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                      >
                        {available_langs.map((lang, i) => {
                          const { code, label } = lang;
                          const selected = code === i18n.language;
                          return (
                            <Box
                              width="100%"
                              minWidth="33.3333%"
                              maxWidth="35%"
                              height={80}
                              border={1}
                              borderRadius={0.5}
                              bgcolor={selected ? "#fafafa" : "transparent"}
                              borderColor={selected ? "red" : "white"}
                              p={1}
                              px={2}
                              display="flex"
                              flexDirection="column"
                              justifyContent="center"
                              alignItems="center"
                              sx={{ cursor: "pointer" }}
                              onClick={() => i18n.changeLanguage(code)}
                              color={"black"}
                            >
                              <Typography className="lang-label">
                                {label}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn "
                        style={{ backgroundColor: "red", color: "white" }}
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </header>
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Container
          maxWidth="xl"
          style={{ backgroundColor: "white", color: "red" }}
        >
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Baloo 2",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "red",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "27px",
                  fontFamily: "'Baloo 2',cursive",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Beta
                <span
                  style={{
                    color: "red",
                    fontFamily: "Itim",
                    textDecoration: "none",
                  }}
                >
                  E
                </span>{" "}
              </span>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              <span
                style={{
                  fontSize: "27px",
                  fontFamily: "'Baloo 2',cursive",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Beta
                <span
                  style={{
                    color: "red",
                    fontFamily: "Itim",
                    textDecoration: "none",
                  }}
                >
                  E
                </span>{" "}
              </span>
            </Typography>
            <Box
              className="justify-content-center"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                textAlign: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "red",
                    display: "block",
                    fontFamily: "'Baloo 2', cursive;",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "red",
                    display: "block",
                    fontFamily: "'Baloo 2', cursive;",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Shop
                </Button>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "red",
                    display: "block",
                    fontFamily: "'Baloo 2', cursive;",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  About
                </Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "red",
                    display: "block",
                    fontFamily: "'Baloo 2', cursive;",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
              <span class=" position-relative" style={{ marginRight: "20px" }}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    fontSize: "16px",
                    marginRight: "6px",
                    color: "#525252",
                  }}
                  // id="sp_cart"
                />

                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill "
                  style={{ backgroundColor: "red" }}
                >
                  <span class="visually-hidden">unread messages</span>
                </span>
              </span>
              </Link> 
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: 34, height: 34 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
             
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            sx={{ position: "relative" }}
            style={{ backgroundColor: "white", boxShadow: "none" }}
          >
            <Toolbar>
              <Typography
                sx={{ textAlign: "center", flex: 1 }}
                variant="h6"
                component="div"
              >
                <span
                  style={{
                    fontSize: "27px",
                    fontFamily: "'Baloo 2',cursive",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  cak<span style={{ color: "red", fontFamily: "Itim" }}>E</span>{" "}
                </span>
              </Typography>
              <IconButton
                edge="end"
                style={{ color: "red" }}
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Divider />
          <Box style={{ textAlign: "center", width: "100%", color: "red" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  color: "red",
                  fontFamily: "'Baloo 2',cursive",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "53px",
                }}
                onClick={handleClose}
                fullWidth
              >
                Home
              </Button>
            </Link>
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  color: "red",
                  fontFamily: "'Baloo 2',cursive",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "53px",
                }}
                onClick={handleClose}
                fullWidth
              >
                Shop
              </Button>
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  color: "red",
                  fontFamily: "'Baloo 2',cursive",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "53px",
                }}
                onClick={handleClose}
                fullWidth
              >
                About
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  color: "red",
                  fontFamily: "'Baloo 2',cursive",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "53px",
                }}
                fullWidth
                onClick={handleClose}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Dialog>
      </AppBar>
    </div>
  );
};
export default Nav;
