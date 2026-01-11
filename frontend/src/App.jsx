import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Sign from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Sign />}/>
        <Route path="/dash" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;


