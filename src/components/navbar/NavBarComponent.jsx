import React from "react";
import About from "../../pages/About.jsx";
import Home from "../../pages/Home.jsx";
import PageNotFound from "../../pages/PageNotFound.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBarComponent() {
    return (
        <Router>
            <header className="nav bg-dark">
                <div className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link active" to="/about">Page 2</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link active" to="/no exist">Page 3</Link>
                </div>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default NavBarComponent;