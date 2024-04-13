import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useEvent, useScrollTop } from '@/hooks';
import PropType from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { editEvent } from '@/redux/actions/eventActions';

const EventForm = lazy(() => import('../components/EventForm'));

const EditEvent = ({ match }) => {
  useDocumentTitle('Edit Event | Qoqiqaz');
  useScrollTop();
  const { event, error, isLoading } = useEvent(match.params.id);
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    dispatch(editEvent(event.id, updates));
  };

  return (
    <div className="product-form-container">
      {error && <Redirect to="/dashboard/events" />}
      <h2>Изменить мероприятие</h2>
      {event && (
        <Suspense fallback={(
          <div className="loader" style={{ minHeight: '80vh' }}>
            <h6>Загружается ... </h6>
            <br />
            <LoadingOutlined />
          </div>
        )}
        >
          <EventForm
            isLoading={isLoading}
            onSubmit={onSubmitForm}
            event={event}
          />
        </Suspense>
      )}
    </div>
  );
};

EditEvent.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string
    })
  }).isRequired
};

export default withRouter(EditEvent);
