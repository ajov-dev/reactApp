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
          {products.map(product => (
            <div id={product.id} className='card card-body' style={
              {
                width: '15rem',
                height: '25rem',
                // marginBottom: '1rem',
              }
            }>
              <picture style={{marginBottom: '1rem'}}>
                <source srcSet={product.image} type="image/webp" />
                <img height={'200'} src={product.image} alt={product.title} className="card-img-top" />
              </picture>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
            </div>
          ))}
        </div>

      </main>
    </>

  );
}

export default Products