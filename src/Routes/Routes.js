import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Login from "../Login/Login";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
      </Switch>
    </Router>
  );
}

export default MainRoutes;
