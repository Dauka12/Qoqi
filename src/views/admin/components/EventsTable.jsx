/* eslint-disable react/forbid-prop-types */
import PropType from "prop-types";
import React from "react";
import { EventItem } from ".";

const EventsTable = ({ filteredEvents }) => (
  <div>
    {filteredEvents.length > 0 && (
      <div className="grid grid-product grid-count-6">
        <div className="grid-col" />
        <div className="grid-col">
          <h5>Название</h5>
        </div>
        <div className="grid-col">
          <h5>Категория</h5>
        </div>
        <div className="grid-col">
          <h5>Дата публикаций</h5>
        </div>
      </div>
    )}
     {filteredEvents.length === 0 ? new Array(10).fill({}).map((event, index) => (
      <EventItem
        // eslint-disable-next-line react/no-array-index-key
        key={`event-skeleton ${index}`}
        event={event}
      />
    )) : filteredEvents.map((event) => (
      <EventItem
        key={event.id}
        event={event}
      />
    ))}
  </div>
);

EventsTable.propTypes = {
  filteredEvents: PropType.array.isRequired,
};

export default EventsTable;
