import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import Home_Copy from "./components/Home_Copy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Home/> */}

        {/* Protected Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home_Copy />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
