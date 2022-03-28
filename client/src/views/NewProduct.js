import React, { useEffect, useState } from 'react';
import { getProducts } from './../helpers/getProducts';
import { errorMessage } from './../utils/SwalMessage';
import AddProduct from '../components/Product/AddProduct';
import ListProducts from '../components/Product/ListProducts';
import Header from '../components/Header/Header';

const NewProduct = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    getProducts()
    .then(({ data }) => {
      setProducts(data);
      setLoaded(true);
      setUpdateList(false);
    })
    .catch((err) => {
      errorMessage(err);
    });
  },[updateList]);

  return (
    <>
    <Header />
    <AddProduct setUpdateList={ setUpdateList }/>
    <div className="py-3">
      {
        loaded && <ListProducts products={ products } setProducts={ setProducts } />
      }
    </div>
    </>
  )
}

export default NewProduct;