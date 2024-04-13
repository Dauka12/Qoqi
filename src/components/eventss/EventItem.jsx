import { CheckOutlined } from "@ant-design/icons";
import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";

const EventItem = ({ event }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!event) return;

    if (event.id) {
      history.push(`/event/${event.id}`);
    }
  };

  // const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  // const handleAddToBasket = () => {
  //   if (addToBasket) addToBasket({ ...product, selectedSize: product.sizes[0] });
  // };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div className={`event-card ${!event.id ? "event-loading" : ""}`}>
        <div
          className="event-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="event-card-img-wrapper">
            {event.image ? (
              <ImageLoader
                alt={event.name}
                className="event-card-img"
                src={event.image}
              />
            ) : (
              <Skeleton width="100%" height="100%" />
            )}
            <div className="event-card-name">
              {event.name || <Skeleton width={80} />}
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

EventItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  event: PropType.object.isRequired,
};

export default EventItem;


