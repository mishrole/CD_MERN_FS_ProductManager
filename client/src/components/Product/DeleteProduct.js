import React from 'react';
import { deleteProduct } from '../../helpers/deleteProduct';
import { errorMessage, successMessage } from '../../utils/SwalMessage';

const DeleteProduct = (props) => {
  const { productId, successCallback } = props;

  const removeProduct = (productId) => {
    deleteProduct(productId)
    .then(({ data }) => {
      successMessage(`<p>Product has been deleted successfully!</p>`);
      successCallback();
    })
    .catch((err) => {
      errorMessage(err.error._message || err.message, err.error.message);
    });
  }

  return (
    <button className="btn btn-danger" onClick={ (e) => { removeProduct(productId) } }>Delete</button>
  )
}

export default DeleteProduct;