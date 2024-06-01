"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans bg-[#482c76] min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl mx-4 h-4/5 mt-4 bg-white shadow-lg flex flex-col md:flex-row rounded-lg relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 py-2 px-4 bg-[#482c76] text-white rounded-2xl"
        >
          Back
        </button>
        <div className="left w-full md:w-1/2 p-8">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "500px", height: "500px" }}
            className="main_image w-full h-full rounded-md object-contain"
          />
        </div>
        <div className="right w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-[#482c76] text-3xl font-semibold mb-4">
              {product.title}
            </h3>
            <div className="text-gray-700 mb-4">
              <p className="mb-2">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="mb-2">
                <strong className="text-xl">${product.price}</strong>
              </p>
              <div className="flex items-center mb-2">
                <p className="text-gray-700 mr-2">
                  <StarRating rate={product.rating.rate} />
                </p>
                <p className="text-gray-700">
                  ({product.rating.count} reviews)
                </p>
              </div>
              <p className="mb-2">{product.description}</p>
            </div>
          </div>
          <div>
            <button className="w-full py-2 bg-[#482c76] text-white rounded-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
