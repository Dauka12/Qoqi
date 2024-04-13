/* eslint-disable react/jsx-props-no-spreading */
import { Boundary } from "@/components/common";
import { EventAppliedFilters, EventList } from "@/components/eventss";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectFilterEvents } from "@/selectors/selectorEvent";
import { EventsNavbar } from "../components";
import EventsTable from "../components/EventsTable";

const Events = () => {
  useDocumentTitle("Events List | Qoqiqaz Admin");
  useScrollTop();

  const store = useSelector((state) => ({
    filteredEvents: selectFilterEvents(state.events.items, state.filter),
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    events: state.events,
  }));

  return (
    <Boundary>
      <EventsNavbar
        eventsCount={store.events.items.length}
        totalEventsCount={store.events.total}
      />
      <div className="product-admin-items">
        <EventList {...store}>
          <EventAppliedFilters filter={store.filter} />
          <EventsTable filteredEvents={store.filteredEvents} />
        </EventList>
      </div>
    </Boundary>
  );
};

export default withRouter(Events);
