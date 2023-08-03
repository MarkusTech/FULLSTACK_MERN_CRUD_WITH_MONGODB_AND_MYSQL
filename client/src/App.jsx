import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Updated from "./Update";
import User from "./User";
import CreateUser from "./CreateUser";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/update/:id" element={<Updated />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
