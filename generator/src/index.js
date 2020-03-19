import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

import { fetchMemes } from './actions';

const store = createStore(
  rootReducer /* preloadedState, */,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
