import React from 'react';
import EditProduct from '../components/Product/EditProduct';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';

const UpdateProduct = () => {

  const { id } = useParams();

  return (
    <>
      <Header />
      <EditProduct id = { id } />
    </>
  )
}

export default UpdateProduct;