import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Results.module.css";
import { productUrl } from "../../Api/endPoint";
import Loader from "../../Components/Loader/Loader";


function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <p style={{ padding: "30px" }}>Results</p>
          <p style={{ padding: "30px" }}>{categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
