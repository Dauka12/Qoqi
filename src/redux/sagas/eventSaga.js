/* eslint-disable indent */
import {
  ADD_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  REMOVE_EVENT,
  SEARCH_EVENT
} from '@/constants/constants';
import { ADMIN_EVENTS } from '@/constants/routes';
import { displayActionMessage } from '@/helpers/utilsEvents';
import {
  all, call, put, select
} from 'redux-saga/effects';
import { setLoading, setRequestStatus } from '@/redux/actions/miscActions';
import { history } from '@/routers/AppRouter';
import firebase from '@/services/firebase';
import {
  addEventSuccess, clearSearchStateEvents,
  editEventSuccess, getEventsSuccess,
  removeEventSuccess,searchEventSuccess
} from '../actions/eventActions';

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch events'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}

function* eventSaga({ type, payload }) {
  switch (type) {
    case GET_EVENTS:
      try {
        yield initRequest();
        const state = yield select();
        const result = yield call(firebase.getEvents, payload);

        if (result.events.length === 0) {
          handleError('No items found.');
        } else {
          yield put(getEventsSuccess({
            events: result.events,
            lastKey: result.lastKey ? result.lastKey : state.events.lastRefKey,
            total: result.total ? result.total : state.events.total
          }));
          yield put(setRequestStatus(''));
        }
        // yield put({ type: SET_LAST_REF_KEY, payload: result.lastKey });
        yield put(setLoading(false));
      } catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;

    case ADD_EVENT: {
      try {
        yield initRequest();

        const { imageCollection } = payload;
        const key = yield call(firebase.generateKeyEvents);
        const downloadURL = yield call(firebase.storeImageEvents, key, 'events', payload.image);
        const image = { id: key, url: downloadURL };
        let images = [];

        if (imageCollection.length !== 0) {
          const imageKeys = yield all(imageCollection.map(() => firebase.generateKeyEvents));
          const imageUrls = yield all(imageCollection.map((img, i) => firebase.storeImageEvents(imageKeys[i](), 'events', img.file)));
          images = imageUrls.map((url, i) => ({
            id: imageKeys[i](),
            url
          }));
        }

        const event = {
          ...payload,
          image: downloadURL,
          imageCollection: [image, ...images]
        };

        yield call(firebase.addEvent, key, event);
        yield put(addEventSuccess({
          id: key,
          ...event
        }));
        yield handleAction(ADMIN_EVENTS, 'Item succesfully added', 'success');
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to add: ${e?.message}`, 'error');
      }
      break;
    }
    case EDIT_EVENT: {
      try {
        yield initRequest();

        const { image, imageCollection } = payload.updates;
        let newUpdates = { ...payload.updates };

        if (image.constructor === File && typeof image === 'object') {
          try {
            yield call(firebase.deleteImageEvents, payload.id);
          } catch (e) {
            console.error('Failed to delete image ', e);
          }

          const url = yield call(firebase.storeImageEvents, payload.id, 'events', image);
          newUpdates = { ...newUpdates, image: url };
        }

        if (imageCollection.length > 1) {
          const existingUploads = [];
          const newUploads = [];

          imageCollection.forEach((img) => {
            if (img.file) {
              newUploads.push(img);
            } else {
              existingUploads.push(img);
            }
          });

          const imageKeys = yield all(newUploads.map(() => firebase.generateKeyEvents));
          const imageUrls = yield all(newUploads.map((img, i) => firebase.storeImageEvents(imageKeys[i](), 'events', img.file)));
          const images = imageUrls.map((url, i) => ({
            id: imageKeys[i](),
            url
          }));
          newUpdates = { ...newUpdates, imageCollection: [...existingUploads, ...images] };
        } else {
          newUpdates = {
            ...newUpdates,
            imageCollection: [{ id: new Date().getTime(), url: newUpdates.image }]
          };
          // add image thumbnail to image collection from newUpdates to
          // make sure you're adding the url not the file object.
        }

        yield call(firebase.editEvent, payload.id, newUpdates);
        yield put(editEventSuccess({
          id: payload.id,
          updates: newUpdates
        }));
        yield handleAction(ADMIN_EVENTS, 'Item succesfully edited', 'success');
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to edit: ${e.message}`, 'error');
      }
      break;
    }
    case REMOVE_EVENT: {
      try {
        yield initRequest();
        yield call(firebase.removeEvent, payload);
        yield put(removeEventSuccess(payload));
        yield put(setLoading(false));
        yield handleAction(ADMIN_EVENTS, 'Item succesfully removed', 'success');
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to remove: ${e.message}`, 'error');
      }
      break;
    }
    case SEARCH_EVENT: {
      try {
        yield initRequest();
        // clear search data
        yield put(clearSearchStateEvents());

        const state = yield select();
        const result = yield call(firebase.searchEvents, payload.searchKey);

        if (result.events.length === 0) {
          yield handleError({ message: 'No Event found.' });
          yield put(clearSearchStateEvents());
        } else {
          yield put(searchEventSuccess({
            events: result.events,
            lastKey: result.lastKey ? result.lastKey : state.events.searchedEvents.lastRefKey,
            total: result.total ? result.total : state.events.searchedEvents.total
          }));
          yield put(setRequestStatus(''));
        }
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    }
    default: {
      throw new Error(`Unexpected action type ${type}`);
    }
  }
}

export default eventSaga;
