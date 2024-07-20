import React from "react";
import { Link } from "react-router-dom";


function NavBarComponent() {
    return (
        <>
            <header className="nav bg-dark">
                <div className="nav-item">
                    <Link className="nav-link active" to="/"><h3>BrandStore</h3></Link>
                </div>
            </header>
        </>
    );
};

export default NavBarComponent;