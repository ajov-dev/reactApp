import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Categories() {
  const [categories, setCategories] = useState([]);
  const [elements, setElements] = useState([]);
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);

        // Crear elementos con imágenes
        const newElements = data.map((category, index) => {
          const element = {
            id: index + 1,
            name: category,
            image: ''
          };

          switch (category) {
            case 'electronics':
              element.image = 'https://ecelectronics.com/wp-content/uploads/2020/04/Modern-Electronics-EC-.jpg';
              break;
            case 'jewelery':
              element.image = 'https://time.com/shopping/static/cd09eba6652ee627f5e53b645dbd36fa/ca7ff/best-online-jewelry-stores.jpg';
              break;
            case "men's clothing":
              element.image = 'https://media.istockphoto.com/id/887360960/es/foto/trajes-para-hombre-en-perchas-en-diferentes-colores.jpg?s=612x612&w=0&k=20&c=0MmW7UbG_2Q8UYPWhrJHYvSsr_mAESHQryxUcqJQ1wo=';
              break;
            case "women's clothing":
              element.image = 'https://media.istockphoto.com/id/1080132360/es/foto/maniquies-de-mujer-en-la-ventana-del-almac%C3%A9n.webp?s=1024x1024&w=is&k=20&c=swm-JIVacmYqkugTLUghloUUX46SksrhlHKW1I_Nwe4=';
              break;
            default:
              break;
          }

          return element;
        });

        setElements(newElements);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
      <main className="main-container">
        <h2 className="text-center">Categorías</h2>
        <div className="elements-container">
          {elements.map(element => (
            <Link key={element.id} to={`../categories/${element.name}/products`}>
              <div className='card card-body'>
                {element.image && <img style={{
                  width: '10rem',
                  height: '10rem',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  backgroundColor: 'unset'
                }} src={element.image} alt={element.name} />}
                <div>
                  <p>{capitalizeWords(element.name)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Categories;
