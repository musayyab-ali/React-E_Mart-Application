import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const ShowProductList = ({ filter, setFilter, data }) => {
  const filterProduct = (cat) => {
    const filterList = data.filter((x) => x.category === cat);
    setFilter(filterList);
  };
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}>
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}>
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}>
          Women Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}>
          Jewelary
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
      </div>
      {filter.map((obj) => {
        return (
          <div className="col-md-3 mb-4">
            <div class="card h-100 text-center p-4" key={obj.id}>
              <img
                src={obj.image}
                class="card-img-top"
                alt={obj.title}
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title mb-0">{obj.title.substring(0, 12)}</h5>
                <p class="card-text">{obj.category}</p>
                <p class="card-text lead fw-bold">${obj.price}</p>
                <p class="card-text">Product Rating {obj.rating.rate}</p>

                <Link to={`/products/${obj.id}`} class="btn btn-outline-dark">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShowProductList;
