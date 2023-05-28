import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import "./SingleProduct.scss";
import { useState, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch("/api/products/" + id + "?populate=*");
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={data?.data?.attributes?.img?.data[0]?.attributes?.url}
              alt={prod}
            />
          </div>
          <div className="right">
            <span className="name">{data?.data?.attributes.title}</span>
            <span className="price">&#8377;{data?.data?.attributes.price}</span>
            <span className="desc">{data?.data?.attributes.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data, quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>
                  {
                    data?.data?.attributes?.categories?.data[0]?.attributes
                      ?.title
                  }
                </span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productid={id}
          categoryid={data?.data?.attributes?.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
