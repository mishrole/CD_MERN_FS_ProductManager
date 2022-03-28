import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import ProductForm from '../components/Product/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../helpers/getProduct';
import { errorMessage, successMessage } from '../utils/SwalMessage';
import { putProduct } from '../helpers/putProduct';

const UpdateProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getProduct(id)
    .then(({ data }) => {
      setProduct({
        id: id,
        title: data.title,
        price: data.price,
        description: data.description
      });
      setLoaded(true);
    })
    .catch((err) => {
      errorMessage(err);
    })
  }, [id]);

  const onFormSubmit = (data) => {
    const id = data.id;
    putProduct(id, data)
    .then(({ data }) => {
      successMessage(`<p>${data?.title} has been updated successfully!</p>`);
      navigate(`/${id}`);
    })
    .catch((err) => {
      errorMessage(err.error._message || err.message, err.error.message);
    });
  }

  return (
    <>
      <Header />
      { loaded && <ProductForm onSubmitProp={ onFormSubmit } product={ product } />}
    </>
  )
}

export default UpdateProduct;