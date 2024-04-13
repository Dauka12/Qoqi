import {
  APPLY_FILTER_EVENTS,
  CLEAR_RECENT_SEARCH_EVENTS,
  REMOVE_SELECTED_RECENT_EVENTS, RESET_FILTER_EVENTS, SET_BRAND_FILTER_EVENTS,
  SET_TEXT_FILTER_EVENTS
} from '@/constants/constants';

export const setTextFilterEvents = (keyword) => ({
  type: SET_TEXT_FILTER_EVENTS,
  payload: keyword
});

export const setBrandFilterEvents = (brand) => ({
  type: SET_BRAND_FILTER_EVENTS,
  payload: brand
});

export const resetFilterEvents = () => ({
  type: RESET_FILTER_EVENTS
});

export const clearRecentSearchEvents = () => ({
  type: CLEAR_RECENT_SEARCH_EVENTS
});

export const removeSelectedRecentEvents = (keyword) => ({
  type: REMOVE_SELECTED_RECENT_EVENTS,
  payload: keyword
});

export const applyFilterEvents = (filters) => ({
  type: APPLY_FILTER_EVENTS,
  payload: filters
});
