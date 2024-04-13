/* eslint-disable react/jsx-props-no-spreading */
import { LoadingOutlined } from '@ant-design/icons';
import { Boundary, MessageDisplay } from '@/components/common';
import { EventGrid } from '@/components/eventss';
import { useDidMountEvents } from '@/hooks';
import PropType from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRequestStatus } from '@/redux/actions/miscActions';
import { searchEvent } from '@/redux/actions/eventActions';

const SearchEvent = ({ match }) => {
  const { searchKey } = match.params;
  const dispatch = useDispatch();
  const didMount = useDidMountEvents(true);
  const store = useSelector((state) => ({
    isLoading: state.app.loading,
    events: state.events.searchedEvents.items,
    // basket: state.basket,
    requestStatus: state.app.requestStatus
  }));

  useEffect(() => {
    if (didMount && !store.isLoading) {
      dispatch(searchEvent(searchKey));
    }
  }, [searchKey]);

  useEffect(() => () => {
    dispatch(setRequestStatus(''));
  }, []);

  if (store.requestStatus && !store.isLoading) {
    return (
      <main className="content">
        <MessageDisplay
          message={store.requestStatus}
          desc="Try using correct filters or keyword."
        />
      </main>
    );
  }

  if (!store.requestStatus && !store.isLoading) {
    return (
      <Boundary>
        <main className="content">
          <section className="product-list-wrapper product-list-search">
            {!store.requestStatus && (
              <div className="product-list-header">
                <div className="product-list-header-title">
                  <h5>
                    {`Found ${store.events.length} ${store.events.length > 1 ? 'events' : 'event'} with keyword ${searchKey}`}
                  </h5>
                </div>
              </div>
            )}
            <EventGrid events={store.events} />
          </section>
        </main>
      </Boundary>
    );
  }

  return (
    <main className="content">
      <div className="loader">
        <h4>Searching Event...</h4>
        <br />
        <LoadingOutlined style={{ fontSize: '3rem' }} />
      </div>
    </main>
  );
};

SearchEvent.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      searchKey: PropType.string
    })
  }).isRequired
};

export default SearchEvent;
