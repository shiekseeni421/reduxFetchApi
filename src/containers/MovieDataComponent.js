import React from "react";
import { useSelector } from "react-redux";
import "../styles/productList.scss";

const MovieDataComponent = () => {
  const products = useSelector((state) => {
    return state;
  });
  const { moviesArray } = products.allProducts;

  return (
    <>
      <div className="MovieDataTable tableContent">
        <h3>Get the Data Separate Component</h3>
        <table>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Year</th>
          </tr>
          {moviesArray.map((val) => {
            return (
              <tr key={val.imdbID}>
                <td>{val.Title}</td>
                <td>{val.Type}</td>
                <td>{val.Year}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default MovieDataComponent;
