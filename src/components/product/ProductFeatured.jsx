import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      history.push(`/product/${product.id}`);
    }
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className="product-display"
        onClick={onClickItem}
        role="presentation"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-display-img">
          {product.image ? (
            <ImageLoader className="product-card-img" src={product.image} />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        {isHovered ? (
          <div className="product-display-details">
            <h2>{product.name || <Skeleton width={80} />}</h2>
            <svg width="100%" height="1" style={{ top: "0" }}>
              <line
                x1="0"
                y1="0"
                x2="50%"
                y2="0"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <p className="text-subtle text-italic">
              {product.brand || <Skeleton width={40} />}
            </p>
            <div style={{ display: "flex", marginLeft: "22rem" }}>
              <FontAwesomeIcon icon={faThumbsUp} className="white-icon" />
              <FontAwesomeIcon icon={faEye} className="white-icon" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </SkeletonTheme>
  );
};

ProductFeatured.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string,
  }).isRequired,
};

export default ProductFeatured;
