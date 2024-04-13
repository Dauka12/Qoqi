/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from '@/components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/redux/actions/miscActions';
import { getEvents } from '@/redux/actions/eventActions';

const EventList = (props) => {
  const {
    events, filteredEvents, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchEvents = () => {
    setFetching(true);
    dispatch(getEvents(events.lastRefKey));
  };

  useEffect(() => {
    if (events.items.length === 0 || !events.lastRefKey) {
      fetchEvents();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [events.lastRefKey]);

  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <MessageDisplay message={requestStatus?.message || 'No events found.'} />
    );
  } if (filteredEvents.length === 0 && requestStatus) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Something went wrong :('}
        action={fetchEvents}
        buttonLabel="Try Again"
      />
    );
  }
  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if products length is less than total products */}
      {events.items.length < events.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchEvents}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )}
    </Boundary>
  );
};

EventList.defaultProps = {
  requestStatus: null
};

EventList.propTypes = {
  events: PropType.object.isRequired,
  filteredEvents: PropType.array.isRequired,
  isLoading: PropType.bool.isRequired,
  requestStatus: PropType.string,
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default EventList;


