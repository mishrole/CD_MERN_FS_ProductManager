import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShowProduct from '../components/Product/ShowProduct';

const ViewProduct = () => {

  const { id } = useParams();

  return (
    <>
      <Header />
      <ShowProduct id={ id } />
    </>
  )
}

export default ViewProduct;