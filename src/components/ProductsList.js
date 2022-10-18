import React,{useState,useEffect} from "react";
import data from "../Data";
import "./proList.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllProducts,imageUrl} from "../services/category";
import Image19 from ".././assets/Image19.png"
import {formatAmount} from "../utils/AmountFormatter"
import { baseurl } from "../utils/request";
import ProductCard from "./atoms/ProductCard";
import ReactPaginate from "react-paginate";
import { showAlert } from "../utils/showAlert";

const ProductsList = () => {
  const navigate = useNavigate();
  const [allProducts,setAllProducts] = useState([])

  const handleGetallProducts  = async () =>{
    try{
    const resp =  await getAllProducts()
    console.log(resp)
    setAllProducts(resp.data)
    }
    catch(error) {
      showAlert("something Went Wrong","Error") 
    }
  }

  useEffect(() => {
    handleGetallProducts();
     console.log("allProducts",allProducts)
  }, []);

  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(allProducts.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  

  const displayProducts =
  
  allProducts &&
  allProducts.slice(pagesVisited, pagesVisited + usersPerPage).map((product) => {
      return (
        <ProductCard product={product} key={product.id} />
      );
    });
  return (
    <Container>
      <Row>
        <h5 className="text-left" style={{ padding: "40px" }}>
          Products
        </h5>
      </Row>
        <div className="row" style={{ paddingLeft: "65px" }}>
          {allProducts.length ? displayProducts : "Loading..."}
        </div>
        <Row>
          <div className="col-md-7"></div>
        <div className="col-md-5 product_pagination" style={{display:"inherit", marginBottom:"20px", marginTop:"20px"}}>
        <ReactPaginate 
              previousLabel={<i class="fa-solid fa-arrow-left fa-lg"></i>}
              nextLabel={<i class="fa-solid fa-arrow-right fa-lg"></i>}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
        </div>
        </Row>
      
    </Container>
  );
};

export default ProductsList;