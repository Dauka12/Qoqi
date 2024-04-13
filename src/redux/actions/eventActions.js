import {
  ADD_EVENT,
  ADD_EVENT_SUCCESS,
  CANCEL_GET_EVENTS,
  CLEAR_SEARCH_STATE_EVENTS,
  EDIT_EVENT,
  EDIT_EVENT_SUCCESS,
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  REMOVE_EVENT,
  REMOVE_EVENT_SUCCESS,
  SEARCH_EVENT,
  SEARCH_EVENT_SUCCESS
} from '@/constants/constants';

export const getEvents = (lastRef) => ({
  type: GET_EVENTS,
  payload: lastRef
});

export const getEventsSuccess = (events) => ({
  type: GET_EVENTS_SUCCESS,
  payload: events
});

export const cancelGetEvents = () => ({
  type: CANCEL_GET_EVENTS
});

export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: event
});

export const searchEvent = (searchKey) => ({
  type: SEARCH_EVENT,
  payload: {
    searchKey
  }
});

export const searchEventSuccess = (events) => ({
  type: SEARCH_EVENT_SUCCESS,
  payload: events
});

export const clearSearchStateEvents = () => ({
  type: CLEAR_SEARCH_STATE_EVENTS
});

export const addEventSuccess = (event) => ({
  type: ADD_EVENT_SUCCESS,
  payload: event
});

export const removeEvent = (id) => ({
  type: REMOVE_EVENT,
  payload: id
});

export const removeEventSuccess = (id) => ({
  type: REMOVE_EVENT_SUCCESS,
  payload: id
});

export const editEvent = (id, updates) => ({
  type: EDIT_EVENT,
  payload: {
    id,
    updates
  }
});

export const editEventSuccess = (updates) => ({
  type: EDIT_EVENT_SUCCESS,
  payload: updates
});
