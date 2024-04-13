import authReducer from './authReducer';
import basketReducer from './basketReducer';
import checkoutReducer from './checkoutReducer';
import filterReducer from './filterReducer';
import filterEventReducer from './filterEventReducer';
import miscReducer from './miscReducer';
import productReducer from './productReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';
import eventReducer from './eventReducer';

const rootReducer = {
  products: productReducer,
  events:eventReducer,
  basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  filter: filterReducer,
  filterEvent: filterEventReducer,
  users: userReducer,
  checkout: checkoutReducer,
  app: miscReducer
};

export default rootReducer;
