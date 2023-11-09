import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/layout/landing";
import SignIn from "./components/auth/signIn";
import Register from "./components/auth/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/login" Component={SignIn} />
        <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
