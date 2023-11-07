import React from "react";
import Header from "./header";
import Home from "./Home";
import Services from "./services";
import Why from "./why";
import About from "./about"

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <Home />
            <Services />
            <Why />
            <About />
        </div>
    )
}

export default Landing;
