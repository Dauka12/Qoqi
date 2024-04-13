import { ImageLoader } from '@/components/common';
import { EDIT_EVENT } from '@/constants/routes';
import { displayActionMessage, displayDate } from '@/helpers/utils';
import PropType from 'prop-types';
import React, { useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { removeEvent } from '@/redux/actions/eventActions';

const EventItem = ({ event }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventRef = useRef(null);

  const onClickEdit = () => {
    history.push(`${EDIT_EVENT}/${event.id}`);
  };

  const onDeleteEvent = () => {
    eventRef.current.classList.toggle('item-active');
  };

  const onConfirmDelete = () => {
    dispatch(removeEvent(event.id));
    displayActionMessage('Item successfully deleted');
    eventRef.current.classList.remove('item-active');
  };

  const onCancelDelete = () => {
    eventRef.current.classList.remove('item-active');
  };

  return (
    <SkeletonTheme
      color="#e1e1e1"
      highlightColor="#f2f2f2"
    >
      <div
        className={`item item-products ${!event.id && 'item-loading'}`}
        ref={eventRef}
      >
        <div className="grid grid-count-6">
          <div className="grid-col item-img-wrapper">
            {event.image ? (
              <ImageLoader
                alt={event.name}
                className="item-img"
                src={event.image}
              />
            ) : <Skeleton width={50} height={30} />}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">{event.name || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{event.brand || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>
              {event.dateAdded ? displayDate(event.dateAdded) : <Skeleton width={30} />}
            </span>
          </div>
          {/* <div className="grid-col">
            <span>{product.maxQuantity || <Skeleton width={20} />}</span>
          </div> */}
        </div>
        {event.id && (
          <div className="item-action">
            <button
              className="button button-border button-small"
              onClick={onClickEdit}
              type="button"
            >
              Изменить
            </button>
            &nbsp;
            <button
              className="button button-border button-small button-danger"
              onClick={onDeleteEvent}
              type="button"
            >
              Удалить
            </button>
            <div className="item-action-confirm">
              <h5>Вы уверены что хотите удалить?</h5>
              <button
                className="button button-small button-border"
                onClick={onCancelDelete}
                type="button"
              >
                Нет
              </button>
              &nbsp;
              <button
                className="button button-small button-danger"
                onClick={onConfirmDelete}
                type="button"
              >
                Да
              </button>
            </div>
          </div>
        )}
      </div>
    </SkeletonTheme>
  );
};

EventItem.propTypes = {
  event: PropType.shape({
    id: PropType.string,
    name: PropType.string,
    brand: PropType.string,
    // maxQuantity: PropType.number,
    description: PropType.string,
    // keywords: PropType.arrayOf(PropType.string),
    imageCollection: PropType.arrayOf(PropType.object),
    // sizes: PropType.arrayOf(PropType.string),
    image: PropType.string,
    imageUrl: PropType.string,
    dateAdded: PropType.number,
    // availableColors: PropType.arrayOf(PropType.string)
  }).isRequired
};

export default withRouter(EventItem);
