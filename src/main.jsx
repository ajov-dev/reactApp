import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import Home from "../src/pages/Home.jsx";
import Categories from "../src/pages/Categories.jsx";
import Products from "../src/pages/Products.jsx";
import PageNotFound from "../src/pages/PageNotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/categories" element={<Categories />} />
                <Route exact path="/categories/:categoryID/products" element={<Products />} />
                <Route exact path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);