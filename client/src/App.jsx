import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./components/Body";
import { Provider, useSelector } from "react-redux";
import appStore from "./utilis/appstore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Signup from "./components/Signup";
import Chatpage from "./components/Chat/Chatpage";
import io, { Socket } from "socket.io-client";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/chat" element={<Chatpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
