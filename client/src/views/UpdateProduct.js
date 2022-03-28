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
  const [errors, setErrors] = useState([]);

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
      <div className="container">
        {
        errors.map((err, index) =>  <p key={index} className="text-danger">{err}</p>)
      }
      </div>
      { loaded && <ProductForm onSubmitProp={ onFormSubmit } product={ product } />}
    </>
  )
}

export default UpdateProduct;