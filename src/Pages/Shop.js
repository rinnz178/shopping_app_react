import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import "../Assets/shop.css";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div style={{height:'80vh'}} >
        <Spinner animation="grow" style={{ backgroundColor: "red" }} />
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedlist = data.filter((x)=>x.category === cat);
    setFilter(updatedlist);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons ">
          <button className="btn btn-outline-danger me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-danger me-2" onClick={()=>filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button className="btn btn-outline-danger me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-danger me-2 " onClick={()=>filterProduct("electronics")}>Electronic</button>
          <button className="btn btn-outline-danger me-2"  onClick={()=>filterProduct("jewelery")}>Jewelery</button>
        </div>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mt-3 justify-content-center">
          {filter.map((product) => {
            return (
              <>
                <div class="col mb-3 col-md-4">
                  <div
                    class="card h-100 p-3 text-center outline-danger"
                    key={product.id}
                  >
                    <img
                      class="card-img-top"
                      src={product.image}
                      alt={product.title}
                      style={{ height: "250px" }}
                    />
                    <div class="card-body">
                      <div class="text-center">
                        <p class="fw-bold">{product.title.substring(0, 11)}</p>
                      </div>
                      <div className="row ">
                        <div className="col-8">
                          <span  style={{textAlign:'left',border:'none'}}>Price: ${product.price}</span>
                        </div>
                        <div className="col-4">
                        <Link to={`/products/${product.id}`}>
                          <span  style={{alignContent:'right'}} className="cart_s">
                            <FontAwesomeIcon icon={faShoppingCart} />
                          </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="d_font">
      {/* <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header> */}
      <span style={{fontWeight:'bold',fontSize:'40px'}}>Latest Products</span>
      <section class="py-5">
      
        <div class="container px-1 px-lg-5 ">
          <div className="row justify-content-center ">
            {loading ? <Loading /> : <ShowProducts />}
          </div>

          {/* <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
         
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Shop;
