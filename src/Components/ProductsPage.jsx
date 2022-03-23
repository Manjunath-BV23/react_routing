import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const ProductsPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      setList([...res.data]);
    });
  }, []);
  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10px",
          padding: "2%",
          marginTop: "175px",
          fontFamily: "monospace",
          fontSize: "15px",
        }}
      >
        <table
          style={{
            width: "100%",
            padding: "2%",
          }}
        >
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {list.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <Link id="tab" key={el.id} to={`${el.id}`}>
                    more details
                  </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
