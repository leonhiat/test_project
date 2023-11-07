import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './components/layout/landing';
import SignIn from './components/sign/signIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/signIn" Component={SignIn} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
