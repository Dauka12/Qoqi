import {
  APPLY_FILTER_EVENTS,
  CLEAR_RECENT_SEARCH_EVENTS,
  REMOVE_SELECTED_RECENT_EVENTS, RESET_FILTER_EVENTS, SET_BRAND_FILTER_EVENTS,
  SET_TEXT_FILTER_EVENTS
} from '@/constants/constants';

const initState = {
  recent: [],
  keyword: '',
  brand: '',
  sortBy: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER_EVENTS:
      return {
        ...state,
        recent: (!!state.recent.find((n) => n === action.payload) || action.payload === '') ? state.recent : [action.payload, ...state.recent],
        keyword: action.payload
      };
    case SET_BRAND_FILTER_EVENTS:
      return {
        ...state,
        brand: action.payload
      };
    case RESET_FILTER_EVENTS:
      return initState;
    case CLEAR_RECENT_SEARCH_EVENTS:
      return {
        ...state,
        recent: []
      };
    case REMOVE_SELECTED_RECENT_EVENTS:
      return {
        ...state,
        recent: state.recent.filter((item) => item !== action.payload)
      };
    case APPLY_FILTER_EVENTS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
