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
  return (
    <>
        <div className='container'>
          <h2>Productos para la categoria {categoryID} </h2>
          <br />
        </div>

        <style>
          
        </style>
    </>
    
  );
}

export default Products