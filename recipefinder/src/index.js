import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./_reducers";

import App from "./components/App";
import { FavouriteRecipeList } from "./components/FavouriteRecipeList";

const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/favourites' component={FavouriteRecipeList}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
