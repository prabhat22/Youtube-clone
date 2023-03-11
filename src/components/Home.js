import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../utils/Store";
const Home = () => {
  return (
    <Provider store={store}>
      <div className="font-serif ">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Home;
