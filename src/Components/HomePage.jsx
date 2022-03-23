import { Link } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsDetailsPage } from "./ProductsDetailsPage";

export const HomePage = () => {

  const [product, setProduct] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/products/`).then((res)=>{
      setProduct([...res.data])
    })
  },[])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        
        {product.map((el) => {

          return <div style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius:"10px",
          padding:"2%"
          
        }}><Link style={{
          color:"black",
          padding:"2%",
          fontFamily:"monospace"
        }} key={el.id} to={`/products/${el.id}`}>{el.name} <img src={`${el.poster}`} alt="poster" /></Link>
        </div>
        })}
        
      </div>
    </>
  );
};
