import React from 'react'

const Home = () => (
  <>
    <main style={
      {
        backgroundImage: 'url(https://images.pexels.com/photos/338027/pexels-photo-338027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="text-center">
      <div className='container' style={
        {

        }
      } >
        <p style={{
          fontSize: '3rem', 
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textShadow: '2px 2px 4px #000'
        }} className=''>Bienvenido a BrandStore <br /> <span>La mejor tienda de ropa en línea</span></p>
      </div>


    </main>
  </>
)


export default Home