import React, { useEffect, useState } from 'react';
import { getProducts } from './../helpers/getProducts';
import { errorMessage } from './../utils/SwalMessage';
import AddProduct from '../components/Product/AddProduct';
import ListProducts from '../components/Product/ListProducts';

const NewProduct = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getProducts()
    .then(({ data }) => {
      setProducts(data);
      setLoaded(true);
    })
    .catch((err) => {
      errorMessage(err);
      // errorMessage(err.error._message || err.message, err.error.message);
    });
  },[]);

  return (
    <>
    <AddProduct/>
    <div className="py-3">
      {
        loaded && <ListProducts products={ products } />
      }
    </div>
    </>
  )
}

export default NewProduct;