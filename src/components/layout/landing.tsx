import React from "react";
import Header from "./header";
import Home from "./Home";
import Services from "./services";

const Landing = () => {
    return (
        <div className="landing">
            <Header />
            <Home />
            <Services />
        </div>
    )
}

export default Landing;
