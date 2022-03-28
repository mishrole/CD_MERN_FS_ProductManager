import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from './../helpers/getProduct';
import { errorMessage } from './../utils/SwalMessage';

const ShowProduct = (props) => {

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
      </div>
    </div>
  )
}

export default ShowProduct;