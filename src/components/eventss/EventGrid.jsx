import PropType from "prop-types";
import React from "react";
import EventItem from "./EventItem";

const EventGrid = ({ events }) => {
  // const { addToBasket, isItemOnBasket } = useBasket();

  return (
    <div className="event-grid">
      {events.length === 0
        ? new Array(12).fill({}).map((event, index) => (
            <EventItem
              // eslint-disable-next-line react/no-array-index-key
              key={`event-skeleton ${index}`}
              event={event}
            />
          ))
        : events.map((event) => (
            <EventItem
              key={event.id}
              // isItemOnBasket={isItemOnBasket}
              // addToBasket={addToBasket}
              event={event}
            />
          ))}
             
    </div>
  );
};

EventGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  events: PropType.array.isRequired,
};

export default EventGrid;


