import { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import * as Scroll from 'react-scroll';

function Products() {
  let Link = Scroll.Link;
  let Button = Scroll.Button;
  let Element = Scroll.Element;
  let Events = Scroll.Events;
  let scroll = Scroll.animateScroll;
  let scrollSpy = Scroll.scrollSpy;
  const [products, setProducts] = useState([]);

  axios.get('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
      setProducts(response.data)
    });
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Products