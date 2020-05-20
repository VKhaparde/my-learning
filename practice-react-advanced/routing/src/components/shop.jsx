import { useState, useEffect } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ItemDetails from './itemDetails';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
  }, []);


  const fetchItems = async () => {
    const data = await fetch('https://randomuser.me/api/');
    const items = await data.json();
    setItems(items.results);
    console.log('items :', items.results)
  }


  return (
    <div>
      <h1>Shop Page</h1>
      {
        items.map((currentVal) => {
          return (
            <div key={currentVal.id.value}>
              <Link to = {`/shop/${currentVal.id.value}`} > {currentVal.name.first}
                <br/>
                <img src={currentVal.picture.large} alt="" />
            </Link>

            </div>

          )
        })
      }

    </div>
  );
}

export default Shop;
