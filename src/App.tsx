import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from '../src/components/layout/landing';
import SignIn from '../src/components/sign/signIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" Component={SignIn} />
        <Route path="/" Component={Landing} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
