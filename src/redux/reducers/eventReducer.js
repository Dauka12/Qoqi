import {
  ADD_EVENT_SUCCESS,CLEAR_SEARCH_STATE_EVENTS,
  EDIT_EVENT_SUCCESS,
  GET_EVENTS_SUCCESS, REMOVE_EVENT_SUCCESS, SEARCH_EVENT_SUCCESS
} from '@/constants/constants';

const initState = {
  lastRefKey: null,
  total: 0,
  items: []
};

export default (state = {
  lastRefKey: null,
  total: 0,
  items: [],
  searchedEvents: initState
}, action) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      const uniqueEvents = action.payload.events.filter(event => !state.items.some(item => item.id === event.id));
      return {
        ...state,
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [...state.items, ...uniqueEvents]
      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SEARCH_EVENT_SUCCESS:
      return {
        ...state,
        searchedEvents: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [...state.searchedEvents.items, ...action.payload.events]
        }
      };
    case CLEAR_SEARCH_STATE_EVENTS:
      return {
        ...state,
        searchedEvents: initState
      };
    case REMOVE_EVENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter((event) => event.id !== action.payload)
      };
    case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        items: state.items.map((event) => {
          if (event.id === action.payload.id) {
            return {
              ...event,
              ...action.payload.updates
            };
          }
          return event;
        })
      };
    default:
      return state;
  }
};
