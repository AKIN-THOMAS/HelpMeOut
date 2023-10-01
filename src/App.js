import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import DashLayout from "./components/dashboard/DashLayout";
import DashHome from "./pages/DashHome";
import VideoDetails from "./components/dashboard/VideoDetails";
import ErrorMessage from "./components/ErrorMessage";
import Login from "./components/main/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route indexed element={<DashLayout />}>
          <Route path="/home" element={<DashHome />} />
          <Route path="/home/:id" element={<VideoDetails />} />
          <Route
            path="*"
            element={<ErrorMessage message={"Page not found"} />}
          />
        </Route>
        <Route path="*" element={<ErrorMessage message={"Page not found"} />} />
      </Routes>
    </Router>
  );
};

export default App;
