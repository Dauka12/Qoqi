import { MessageDisplay } from "@/components/common";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilterEvents } from "@/selectors/selectorEvent";
import {
  EventAppliedFilters,
  EventGrid,
  EventList,
} from "@/components/eventss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Firebase from "../../services/firebase";
import Carousel from "react-grid-carousel";
import { useEffect, useState } from "react";

const Event = () => {
  useDocumentTitle("Qoqiqaz | Events");
  useScrollTop();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const store2 = useSelector(
    (state) => ({
      filteredEvents: selectFilterEvents(state.events.items, state.filter),
      events: state.events,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const { events } = await Firebase.getEvents();
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, [Firebase]);

  return (
    <main className="content">
      <div className="home">
        <h2 style={{ marginLeft: "2rem", marginTop: "5rem" }}>Мероприятия</h2>

        <Carousel cols={3} rows={2} gap={10} loop scrollSnap={true}>
          {events.map((event, index) => (
            <Carousel.Item key={index}>
              <EventGrid events={[event]} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </main>
  );
};

export default Event;
