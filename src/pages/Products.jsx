import { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

function Products() {
  const { categoryID } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/category/${categoryID}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(products);

  return (
    <>
      <main className="product-container">
        <h2 className="text-center mt-5">Productos para la categoría <strong>{categoryID}</strong> </h2>
        <div className="product-element-container">
          {/* <div className="">
            
          </div> */}
          {products.map(product => (
              <div className='card card-body'>
                <div style={
                  {
                    width: '10rem',
                    height: '10rem',
                  }
                }></div>
                <h5 className="card-title">Nombre del producto</h5>
                <p className="card-text">Precio del producto</p>
              </div>
            ))}
        </div>

      </main>
    </>

  );
}

export default Products