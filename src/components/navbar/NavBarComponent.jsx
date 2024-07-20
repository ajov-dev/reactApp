import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Categories from "../../pages/Categories.jsx";
import Products from "../../pages/Products.jsx";
import PageNotFound from "../../pages/PageNotFound.jsx";

function NavBarComponent() {
    return (
        <>
            <header className="nav bg-dark" style={{
                height: '50px',
            }}>
                <div className="nav-item">
                    <Link className="nav-link active" to="/">BrandStore</Link>
                </div>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/categories" element={<Categories />} />
                <Route exact path="/categories/:categoryID/products" element={<Products />} />
                <Route exact path="/*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default NavBarComponent;