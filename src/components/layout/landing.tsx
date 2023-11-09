import React from "react";
import Header from "./header";
import Home from "./Home";
import Services from "./services";
import Why from "./why";
import About from "./about";
import Clients from "./clients";
import Contact from './contact';

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <Home />
            <Services />
            <Why />
            <About />
            <Clients />
            <Contact />
        </div>
    )
}

export default Landing;
