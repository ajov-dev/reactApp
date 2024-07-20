import { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

function Products() {
  const { categoryID } = useParams();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        // Filtrar productos por categoryID
        const filteredProducts = data.filter(product => product.category.id === parseInt(categoryID));
        // Validar y corregir el formato de las imágenes si es necesario
        const correctedProducts = filteredProducts.map(product => {
          if (typeof product.images[0] === 'string' && product.images[0].startsWith('["')) {
            try {
              product.images = JSON.parse(product.images[0]);
            } catch (error) {
              console.error('Error parsing images:', error);
            }
          }else{
            product.images = product.images[0];
          }
          return product;
        });
        setProducts(correctedProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryID]);

  return (
    <>
      <main className='container' style={
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          padding: '2rem',
          overflow: 'auto',
          height: '100vh',
        }
      }>
        {products.map(product => (
          <div >
            <>
              <picture>
                <img width={'200'} src={product.images} alt={product.name} />
              </picture>
              <p>{product.name}</p>
            </>
            {console.log(product)}
          </div>
        ))}
      </main>
    </>
  );
}

export default Products