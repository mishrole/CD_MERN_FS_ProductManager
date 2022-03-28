import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListProducts = (props) => {
  const { products } = props;
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/${id}`);
  }

  return (
    <div className="container">
      <div className="row">
      {
        products.map((product, index) => {
          return (
            <div className="col-12 col-md-6 p-2" key={ index } onClick={ () => goToProduct(product._id) }>
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