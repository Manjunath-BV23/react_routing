import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NotFoundPage } from "./NotFoundPage";

export const ProductsDetailsPage = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setProduct({ ...res.data });
    });
  }, []);

  return (
    <>
      {product !== "" ? (
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <div
            className="productDetails"
            style={{
              padding: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "10px",
              display:"flex",
              width:"60%",
              justifyContent:"space-around"
            }}
          >
            <img src={`${product.specifications.image}`} alt="image" />
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications : </h5>
            <div style={{paddingLeft: "30px" }}>
              <ul>
                <li>Brand : {product.specifications.Brand}</li>
                <li>Model : {product.specifications.Model}</li>
                <li>Release date : {product.specifications.ReleaseDate}</li>
                <li>Form Factor : {product.specifications.FormFactor}</li>
                <li>Dimensions (mm) : {product.specifications.Dimensions}</li>
                <li>Weight(g) : {product.specifications.Weight}</li>
                <li>
                  BatteryCapacity (mAh) :{" "}
                  {product.specifications.BatteryCapacity}
                </li>
                <li>
                  RemovableBattery : {product.specifications.RemovableBattery}
                </li>
                <li>
                  Colours :{" "}
                  {product.specifications.Colours.map((e) => {
                    return <a>{e}</a>;
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
