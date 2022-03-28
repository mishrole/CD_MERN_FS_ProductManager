import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';

const ShowProduct = (props) => {

  const { product } = props;
  const navigate = useNavigate();

  const goToEditProduct = (productId) => {
    navigate(`/${productId}/edit`);
  }

  const goToListProducts = () => {
    navigate('/');
  }

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
            <DeleteProduct productId={ product._id } successCallback={ goToListProducts }/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProduct;