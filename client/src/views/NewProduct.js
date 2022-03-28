import React, { useEffect, useState } from 'react';
import { getProducts } from './../helpers/getProducts';
import { errorMessage, successMessage } from './../utils/SwalMessage';
import ListProducts from '../components/Product/ListProducts';
import Header from '../components/Header/Header';
import ProductForm from '../components/Product/ProductForm';
import { postProduct } from '../helpers/postProduct';

const NewProduct = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [errors, setErrors] = useState([]);

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

  const onFormSubmit = (data) => {
    postProduct(data)
    .then(({ data }) => {
      successMessage(`<p>${data?.product?.title} has been added successfully!</p><p>Generated Id: ${data?.product?._id}</p>`);
      setUpdateList(true);
    })
    .catch((err) => {
      const errors = err?.error?.errors;
      const errorArr = [];

      for (const key of Object.keys(errors)) {
        errorArr.push(errors[key].message);
      }

      setErrors(errorArr);
      
      errorMessage(err.error._message || err.message, err.error.message);
    });
  }

  return (
    <>
    <Header />
    <div className="container py-3">
      {
        errors.map((err, index) =>  <p key={index} className="text-danger">{err}</p>)
      }
    </div>
    <ProductForm onSubmitProp={ onFormSubmit }/>
    <div className="py-3">
      {
        loaded && <ListProducts products={ products } setProducts={ setProducts } />
      }
    </div>
    </>
  )
}

export default NewProduct;