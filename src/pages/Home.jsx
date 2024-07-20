import react from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Categories from './Categories';

function Home() {
  return (
    <>
      <main style={
        {
          backgroundImage: 'url(https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundPosition: 'center',
          overflow: 'auto',
        }} className="text-center">
        <div className='container flex-column'>
          <p style={{
            fontSize: '3rem',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textShadow: '2px 2px 4px #000'
          }} className=''>Bienvenido a BrandStore <br /> <span>La mejor tienda en línea</span></p>
          <Link to="/categories" className='btn btn-primary'>Ver categorías</Link>
        </div>
      </main>
    </>
  );
}

export default Home