import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import Login from "../Login/Login";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route exact path="/" element={<Navigate to="/login" />} />
      </Switch>
    </Router>
  );
}

export default MainRoutes;
