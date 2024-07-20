import React from "react";
import { Link } from "react-router-dom";


function FooterComponent() {
    return (
        <>
            <footer style={{
                position: 'fixed',
                left: '0',
                bottom: '0',
                width: '100%',
                color: 'white',
                textAlign: 'center',
                zIndex: '100',
            }} className="footer bg-dark">
                <p>todos los derechos reservados </p>
            </footer>
        </>
    );
};

export default FooterComponent;