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
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <p>Todos los derechos reservados para <strong>BrandStore. </strong></p>
                    <p>Siguenos en redes sociales como <strong>@BrandStore</strong></p>

                </div>
            </footer >
        </>
    );
};

export default FooterComponent;