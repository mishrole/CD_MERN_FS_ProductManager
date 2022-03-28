import React, { useEffect, useState } from 'react';
import { getProduct } from '../../helpers/getProduct';
import { errorMessage, successMessage } from '../../utils/SwalMessage';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../helpers/deleteProduct';

const ShowProduct = (props) => {

  const { id } = props;
  const navigate = useNavigate();

  const goToEditProduct = (id) => {
    navigate(`/${id}/edit`);
  }

  const removeProduct = (productId) => {
    deleteProduct(productId)
    .then(({ data }) => {
      successMessage(`<p>Product has been deleted successfully!</p>`);
      navigate('/');
    })
    .catch((err) => {
      errorMessage(err.error._message || err.message, err.error.message);
    });
  }

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
    <div className="container py-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h5 className="card-title">{ product.title }</h5>
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-end">
                <span className="badge rounded-pill bg-primary">
                  $ { product.price }
                </span>
              </div>
            </div>
          </div>
          <p className="card-text">{ product.description }</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-info" onClick={ () => goToEditProduct(product._id) }>Edit</button>
            <button className="btn btn-danger" onClick={ (e) => { removeProduct(product._id) } }>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProduct;