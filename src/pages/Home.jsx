import react from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Categories from './Categories';
import PageNotFound from './PageNotFound';

function Home() {
  return (
    <>
      <main style={
        {
          backgroundImage: 'url(https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="text-center">
        <div className='container'>
          <p style={{
            fontSize: '3rem',
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textShadow: '2px 2px 4px #000'
          }} className=''>Bienvenido a BrandStore <br /> <span>La mejor tienda de ropa en línea</span></p>
        </div>
        <div className='container'>
          <Link to="/categories" className='btn btn-primary'>Ver categorías</Link>
        </div>
        <Routes>
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default Home