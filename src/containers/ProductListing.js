import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

import { setMovieData } from "../redux/actions/moveActon";
import "../styles/productList.scss";

const ProductListing = () => {
  const products = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  //console.log(products);

  //   Title: "Avengers: Infinity War"
  // Type: "movie"
  // Year: "2018"
  // imdbID: "tt4154756"

  const { moviesArray } = products.allProducts;
  //console.log(moviesArray);

  const fetchListing = async () => {
    const response = await Axios.get(
      "https://www.omdbapi.com/?apikey=45f0782a&s=war"
    ).catch((error) => {
      console.log(error);
    });
    dispatch(setMovieData(response.data.Search));
  };

  useEffect(() => {
    fetchListing();
  }, []);

  return (
    <>
      <div className="tableContent">
        <h3>Get the Data in Redux</h3>
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

export default ProductListing;
