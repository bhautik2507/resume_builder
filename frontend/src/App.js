import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateResume from "./pages/CreateResume";
import ListResume from "./pages/ListResume";
import PdfViewer from "./pages/PdfViewer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createResume" element={<CreateResume />} />
        <Route path="/listResume" element={<ListResume />} />
        <Route path="/view-pdf/:id" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
