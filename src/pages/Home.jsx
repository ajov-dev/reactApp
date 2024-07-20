import react from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Categories from './Categories';
{/* <div className='container'>
<p style={{
  fontSize: '3rem',
  color: 'white',
  padding: '20px',
  borderRadius: '10px',
  textShadow: '2px 2px 4px #000'
}} className=''>Bienvenido a BrandStore <br /> <span>La mejor tienda en línea</span></p>
<Link to="/categories" className='btn btn-primary'>Ver categorías</Link>
</div> */}
// backgroundImage: 'url(https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',


function Home() {
  return (
    <>
      <main></main>
      <div className="main-container">
        <h2 className="text-center mt-5"></h2>
        <div className="elements-container">
          <p style={{
            fontSize: '3rem',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textShadow: '2px 2px 4px #000'
          }} className=''>Bienvenido a BrandStore <br /> <span>La mejor tienda en línea</span></p>
        </div>
        <Link to="/categories" className='btn btn-primary'>Ver categorías</Link>
      </div>
      <style>
        {`
        main {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url('https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: cover;
        background-position: center;
        z-index: -1;
        }
        `}
      </style>
    </>
  );
}

export default Home