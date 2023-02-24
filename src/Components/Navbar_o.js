import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../Assets/nav.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "./Languages";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

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
function OffcanvasExample() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div>
      <header className="header">
        <Box>
          <Grid container>
            <Grid xs={2} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
                    icon={faPhone}
                   
                  />
            </Grid>
            <Grid xs={8}>Instock T shirts will be shipped within 3 days.</Grid>
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

      <div className="container " >
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            bg="transparent"
            dark
            expand={expand}
            className=""
          >
            <Container fluid>
              <Navbar.Brand>
                <span>
                  <span style={{ fontSize: "27px", cursor: "pointer" }}>
                    c a k{" "}
                  </span>
                  <span
                    className="logo"
                    style={{ color: "#ee000f", fontSize: "24px" }}
                  >
                    E
                  </span>
                </span>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ border: "none", color: "red" }}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <span style={{ fontSize: "27px" }}>c a k </span>
                    <span
                      className="logo"
                      style={{ color: "#ee000f", fontSize: "24px" }}
                    >
                      E
                    </span>
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body id="pc_nav">
                  <Nav className="justify-content-center mr-lg-5   flex-grow-1 pe-3 header_text">
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Nav.Link
                        className="btn"
                        id="hov"
                        style={{
                          textDecoration: "none",
                          borderRadius: "20px",
                          border: "none",
                        }}
                        href="#action1"
                      >
                        Home
                      </Nav.Link>
                    </Link>
                    <Link
                      to="/shop"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Nav.Link
                        id="hov"
                        style={{
                          textDecoration: "none",
                          borderRadius: "20px",
                          border: "none",
                        }}
                        href="#action2"
                      >
                        shop
                      </Nav.Link>
                    </Link>
                    <Link
                      to="/about"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Nav.Link
                        id="hov"
                        style={{
                          textDecoration: "none",
                          borderRadius: "20px",
                          border: "none",
                        }}
                        href="#action3"
                      >
                        About
                      </Nav.Link>
                    </Link>
                    <Link
                      to="/contact"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Nav.Link
                        id="hov"
                        style={{
                          textDecoration: "none",
                          borderRadius: "20px",
                          border: "none",
                        }}
                        href="#action4"
                      >
                        Contact
                      </Nav.Link>
                    </Link>
                  </Nav>
                  <Nav className="d-flex header_text">
                    <Nav.Link href="#action4">
                      <Link to="/cart">
                        <span
                          class=" position-relative"
                          style={{ marginRight: "20px" }}
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{
                              fontSize: "16px",
                              marginRight: "6px",
                              color: "#525252",
                            }}
                            id="sp_cart"
                          />

                          <span
                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill "
                            style={{ backgroundColor: "red" }}
                          >
                            5
                            <span class="visually-hidden">unread messages</span>
                          </span>
                        </span>
                      </Link>
                    </Nav.Link>
                  </Nav>

                  <Nav>
                    <Link to="/login">
                      <Button
                        className="rounded-5 justify-content-left login_btn "
                        variant="outline-danger"
                      >
                        <span className="header_text">Login</span>
                      </Button>
                    </Link>
                  </Nav>
                </Offcanvas.Body>

                {/* Mobile Nav */}
                <Offcanvas.Body id="mobile_nav">
                  <Nav className="header_text">
                    <Nav.Link
                      href="#action1"
                      id="hov"
                      style={{
                        textDecoration: "none",
                        borderRadius: "20px",
                        border: "none",
                      }}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="#action2"
                      id="hov"
                      style={{
                        textDecoration: "none",
                        borderRadius: "20px",
                        border: "none",
                      }}
                    >
                      Shop
                    </Nav.Link>
                    <Nav.Link
                      href="#action3"
                      id="hov"
                      style={{
                        textDecoration: "none",
                        borderRadius: "20px",
                        border: "none",
                      }}
                    >
                      About Us
                    </Nav.Link>
                    <Nav.Link
                      href="#action4"
                      id="hov"
                      style={{
                        textDecoration: "none",
                        borderRadius: "20px",
                        border: "none",
                      }}
                    >
                      Contact
                    </Nav.Link>
                  </Nav>
                  <Nav className="d-flex header_text">
                    <Nav.Link href="#action4">
                      <span
                        class=" position-relative"
                        style={{ marginRight: "10px" }}
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          style={{ fontSize: "16px", marginRight: "6px" }}
                        />

                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          5<span class="visually-hidden">unread messages</span>
                        </span>
                      </span>
                    </Nav.Link>
                    <Link to="/login">
                      <Button
                        className="btn rounded-5 header_text login_btn"
                        variant="outline-danger"
                        style={{ width: "20vw", margin: "auto" }}
                      >
                        Login
                      </Button>
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </div>
  );
}

export default OffcanvasExample;
