import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  useDispatch } from "react-redux";
// import { addCart } from '../Components/Redux/Action/'
import React, { useState, useEffect } from "react";
// import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';


const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch();

    // const addProduct = (product) => {
    //     dispatch(addCart(product));
    // }

    useEffect(() => {
        const getProduct = async ()=> {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`) ;
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])

    const Loading = () => {
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} />
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} />
                <Skeleton height={150} />
                <Skeleton height={50} width={100} />
                <Skeleton height={50} width={100} style={{marginLeft:6}} />

            </div>
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <div className="row" >
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="200px" width="400px"/>
                </div>
                <div style={{textAlign:'left'}} className="col-md-6 ">
                    <span className="text-uppercase text-black-50" style={{fontSize:'30px'}}>
                        {product.category}
                    </span>
                    <p className="display-5">{product.title}</p>
                    <p className="lead fq-bolder">
                        Rating {product.rating && product.rating.rate} 
                        <FontAwesomeIcon icon={faStar}/>
                    </p>
                    <p className="display-6 fw-bold my-4">
                        $ {product.price}
                    </p>
                    <p className="lead"> {product.description}</p>
                    <button className="btn btn-outline-danger"  >
                        Add to Cart
                    </button>
                    <Link to="/cart">
                    <button className="btn btn-danger">
                        Go to Cart
                    </button>
                    </Link>
                </div>
            </div>
        )
    } 
  return (
    <div style={{ minHeight: "85vh" }}>
      <div className="container py-5">
        <div className="row py-4">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
