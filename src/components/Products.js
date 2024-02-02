import React, { useEffect, useState } from "react";
import ShowProductList from "./ShowProductList";
import Loading from "./Loading";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);

  const getProductList = async () => {
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      });
    },2000);
    // const response = await fetch("https://fakestoreapi.com/products");
    // setData(await response.clone().json());
    // setFilter(await response.json());
    // setLoading(false);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <ShowProductList
              filter={filter}
              setFilter={setFilter}
              data={data}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
