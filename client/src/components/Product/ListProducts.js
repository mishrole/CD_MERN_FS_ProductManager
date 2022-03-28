import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';

const ListProducts = (props) => {
  const { products, setProducts } = props;
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/${id}`);
  }

  const removeFromDom = (productId) => {
    setProducts(products.filter(product => product._id !== productId));
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
                    <DeleteProduct productId={ product._id } successCallback={ () => { removeFromDom(product._id) } }/>
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