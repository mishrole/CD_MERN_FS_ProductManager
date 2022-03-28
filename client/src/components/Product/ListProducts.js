import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from './../../helpers/deleteProduct';
import { errorMessage, successMessage } from '../../utils/SwalMessage';

const ListProducts = (props) => {
  const { products } = props;
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/${id}`);
  }

  const removeProduct = (productId) => {
    deleteProduct(productId)
    .then(({ data }) => {
      successMessage(`<p>Product has been deleted successfully!</p>`);
    })
    .catch((err) => {
      errorMessage(err.error._message || err.message, err.error.message);
    });
  }

  return (
    <div className="container">
      <div className="row">
      {
        products.map((product, index) => {
          return (
            <div className="col-12 col-md-6 p-2" key={ index }>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8">
                      <h5 className="card-title">{ product.title }</h5>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-end align-items-center">
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
                    <button className="btn btn-secondary" onClick={ () => goToProduct(product._id) }>Show</button>
                    <button className="btn btn-danger" onClick={ (e) => { removeProduct(product._id) } }>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default ListProducts;