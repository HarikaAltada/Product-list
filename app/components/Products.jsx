import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Main from "./main";
import Footer from "./Footer";
const StarRating = ({ rate }) => {
  const starsTotal = 5;
  const filledStars = Math.round(rate * starsTotal) / starsTotal;
  const starArray = [];

  for (let i = 0; i < starsTotal; i++) {
    if (i < filledStars) {
      starArray.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    } else {
      starArray.push(
        <span key={i} className="text-gray-400">
          &#9733;
        </span>
      );
    }
  }

  return (
    <div className="flex items-center">
      <div>{starArray}</div>
      <span className="text-gray-700 ml-2">{rate.toFixed(1)}</span>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize with all products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header />
      <Main />
      <div className="container mx-auto px-4 py-8 mt-[120px]" id="product">
        <div className="mb-4 flex flex-col w-full items-center pt-4 gap-4">
          <form className="max-w-[480px] w-full px-4">
            <div className="relative mb-10">
              <input
                type="text"
                name="q"
                className="w-full border h-12 shadow p-4 rounded-full"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" onClick={(e) => e.preventDefault()}>
                <img
                  className="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
                  src="./search.svg"
                  alt="search"
                />
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 align-center">
            {filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="card border border-gray-200 p-4 rounded-lg shadow-md flex flex-col justify-between "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain rounded-md mb-4"
                />
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-[#482c76]">
                    {product.title}
                  </h2>
                  <p className="text-gray-700 mb-2">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong> ${product.price}</strong>
                  </p>
                  <div className="flex items-center mb-2">
                    <p className="text-gray-700 mr-2">
                      <StarRating rate={product.rating.rate} />
                    </p>
                    <p className="text-gray-700">
                      ({product.rating.count} reviews)
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
