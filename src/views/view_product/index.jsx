import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { ColorChooser, ImageLoader, MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { RECOMMENDED_PRODUCTS, SHOP } from "@/constants/routes";
import { displayMoney } from "@/helpers/utils";
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useFeaturedProducts,
  useScrollTop,
} from "@/hooks";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import Card from "react-bootstrap/Card";
import { CardBody, CardTitle } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import UserAvatar from "../account/components/UserAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBookmark,
  faShare,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const ViewProduct = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  useScrollTop();
  useDocumentTitle(`Обзор ${product?.name || "Item"}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [rating, setRating] = useState(0); // State to store the rating

  // Function to handle click on a star
  const handleStarClick = (value) => {
    setRating(value);
  };

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading,
  }));

  const { profile, isAuthenticating } = useSelector((state) => ({
    profile: state.profile,
    isAuthenticating: state.app.isAuthenticating,
  }));

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(100);

  const colorOverlay = useRef(null);

  useEffect(() => {
    setSelectedImage(product?.image);
  }, [product]);

  const handleAddToBasket = () => {
    addToBasket({
      ...product,
    });
  };

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Загружается</h4>
          <br />
          <LoadingOutlined style={{ fontSize: "3rem" }} />
        </div>
      )}
      {error && <MessageDisplay message={error} />}
      {product && !isLoading && (
        <div className="product-view">
          <Link to={SHOP}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Вернуться в Маркетплэйс
            </h3>
          </Link>
          <div className="product-modal" style={{ background: "white" }}>
            <div className="product-modal-image-wrapper">
              <ImageLoader
                alt={product.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>
            <div className="product-modal-details">
              <br />
              <h1 className="margin">{product.name}</h1>
              <div style={{ height: "2px", backgroundColor: "black" }} />
              <div
                style={{
                  border: "2px solid black",
                  height: "4rem",
                  borderRadius: "3rem",
                  width: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginTop: "2rem",
                }}
              >
                <p>{product.brand}</p>
              </div>
              <br />
              <br />
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1rem",
                }}
              >
                <div
                  className="user-nav-img-wrapper"
                  style={{ marginLeft: "0" }}
                >
                  <img alt="" className="user-nav-img" src={profile.avatar} />
                </div>
                <h5
                  style={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                    marginLeft: "2rem",
                  }}
                >
                  {profile.fullname}
                </h5>
                <Button
                  style={{
                    borderRadius: "5rem",
                    background: "#F28290",
                    color: "white",
                    fontWeight: "500",
                    height: "4rem",
                    width: "14rem",
                    border: "none",
                    marginLeft: "2rem",
                  }}
                >
                  Подписаться
                </Button>
              </div>
              <div style={{ marginTop: "2rem" }}>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      cursor: "pointer",
                      color: index < rating ? "#F28290" : "gray",
                      fontSize: "3rem",
                    }}
                    onClick={() => handleStarClick(index + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  style={{
                    width: "4rem",
                    height: "4rem",
                    marginTop: "1rem",
                    borderRadius: "5rem",
                    background: "#F28290",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                    }}
                    icon={faThumbsUp}
                  />
                </Button>
                <Button
                  style={{
                    width: "4rem",
                    height: "4rem",
                    marginTop: "1rem",
                    borderRadius: "5rem",
                    background: "#F28290",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    marginLeft: "1rem",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                    }}
                    icon={faBookmark}
                  />
                </Button>
                <Button
                  style={{
                    width: "4rem",
                    height: "4rem",
                    marginTop: "1rem",
                    borderRadius: "5rem",
                    background: "#F28290",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    marginLeft: "1rem",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                    }}
                    icon={faShare}
                  />
                </Button>
                <Button
                  style={{
                    width: "4rem",
                    height: "4rem",
                    marginTop: "1rem",
                    borderRadius: "5rem",
                    background: "#F28290",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    marginLeft: "1rem",
                  }}
                  type="button"
                  className={`button button-small ${
                    isItemOnBasket(product.id)
                      ? "button-border button-border-gray"
                      : ""
                  }`}
                  onClick={handleAddToBasket}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                    }}
                    icon={faCartShopping}
                  />
                  {isItemOnBasket(product.id) ? "+" : ""}
                </Button>
              </div>
              <div style={{ display: "flex", marginTop: "3rem" }}>
                <div
                  className="user-nav-img-wrapper"
                  style={{ marginLeft: "0" }}
                >
                  <img alt="" className="user-nav-img" src={profile.avatar} />
                </div>
                <Form.Group style={{ marginLeft: "2rem" }}>
                  <Form.Control
                    style={{
                      height: "25rem",
                      width: "50rem",
                      borderRadius: "2rem",
                      textAlign: "left",
                      paddingLeft: "2rem",
                      paddingBottom: "20rem",
                    }}
                    type="text"
                    placeholder="Поделитесь ваши личными
                    впечатлениями"
                  ></Form.Control>
                </Form.Group>
              </div>
              {featuredProducts.some((fp) => fp.id === product.id) && (
                <>
                  <h1>{displayMoney(product.price)}</h1>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewProduct;
