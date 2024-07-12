import React from "react";
import Home from "../../pages/Home.jsx";
import Categories from "../../pages/Categories.jsx";
import Products from "../../pages/Products.jsx";
import Section from "../../pages/Section.jsx";
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
                    <Link className="nav-link active" to="/categories">Categories</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link active" to="/products">Products</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link active" to="/section">scroll</Link>
                </div>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/categories" element={<Categories />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/section" element={<Section />} />
                <Route exact path="/*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default NavBarComponent;