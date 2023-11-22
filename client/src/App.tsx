import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/layout/landing";
import SignIn from "./components/auth/signIn";
import Register from "./components/auth/register";
import Deposit from "./components/layout/deposit";
import History from "./components/layout/history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/register" Component={Register} />
        <Route path="/deposit" Component={Deposit} />
        <Route path="/history" Component={History} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
