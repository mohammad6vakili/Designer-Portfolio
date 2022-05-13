import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import Reducer from "./Store/Reducers/AppReducer";

const rootReducer = combineReducers({
  Reducer: Reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
