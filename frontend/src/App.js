import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.js"
import Home from "./pages/Home/Home.js";
import SignIn from "./pages/SignIn/SignIn.js";
import User from "./pages/User/User.js"
import Footer from "./components/Footer/Footer.js"
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </>

  );
}
export default App;
