import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShowProduct from '../components/Product/ShowProduct';
import { errorMessage } from '../utils/SwalMessage';
import { getProduct } from '../helpers/getProduct';

const ViewProduct = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id)
    .then(({ data }) => {
      setProduct(data);
    })
    .catch((err) => {
      errorMessage(err);
    })
  }, [id]);

  return (
    <>
      <Header />
      <ShowProduct product={ product } />
    </>
  )
}

export default ViewProduct;