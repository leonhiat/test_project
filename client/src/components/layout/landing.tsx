import React, { useEffect } from "react";
import Header from "./header";
import Home from "./Home";
import Services from "./services";
import Why from "./why";
import About from "./about";
import Clients from "./clients";
import Contact from "./contact";
import Footer from "./footer";

const Landing = () => {
  let timeoutId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        logout();
      }, 5000);
    };

    const logout = () => {
      // Destroy the token and perform any necessary cleanup
      // For example:
      localStorage.removeItem("token");
      // Additional cleanup logic here
      if (!localStorage.getItem("token")) {
        alert("Token has been destroyed."); // Confirmation message
      }
      // Redirect to the login page or perform any other necessary actions
      // For example:
      window.location.href = "/login";
    };

    resetTimeout();

    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("mousedown", resetTimeout);
    document.addEventListener("keypress", resetTimeout);

    return () => {
      document.removeEventListener("mousemove", resetTimeout);
      document.removeEventListener("mousedown", resetTimeout);
      document.removeEventListener("keypress", resetTimeout);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="landing">
      <Header />
      <Home />
      <Services />
      <Why />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
