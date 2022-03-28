import React, { useEffect, useReducer } from 'react';
import { formIsValid } from '../../utils/FormValidation';
import { errorMessage } from '../../utils/SwalMessage';

const reducer = (state, action) => {
  if (action.type === 'reset') {
    return initialState;
  }

  if (action.type === 'overwrite') {
    return action.payload;
  }

  return {
    ...state,
    [action.type]: action.payload
  }
}

const initialState = {
  title: {
    value: '',
    error: null
  },
  price: {
    value: 0,
    error: null
  },
  description: {
    value: '',
    error: null
  }
}

const ProductForm = (props) => {

  const { onSubmitProp, product } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (product) {
      dispatch({
        type: 'overwrite',
        payload: {
          title: {
            value: product.title,
            error: null
          },
          price: {
            value: product.price,
            error: null
          },
          description: {
            value: product.description,
            error: null
          }
        }
      })
    }
  }, [product])

  const clearForm = () => {
    dispatch({ type: 'reset' });
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let isValid = false;

    if (type === 'text' || type === 'textarea') {
      isValid = value.length > 0;
    }

    if (type === 'number') {
      isValid = value > 0;
    }

    dispatch({
      type: name,
      payload: {
        value: value,
        error: {
          result: isValid ? 'is-valid' : 'is-invalid',
          message: isValid ? 'Looks good!' : `Please provide a valid ${name}`
        }
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formIsValid(e)) {
      const data = {
        id: product?.id,
        title: state.title.value,
        price: state.price.value,
        description: state.description.value
      };

      onSubmitProp(data);
      clearForm();

    } else {
      errorMessage('Please provide valid data');
    }
  }

  return (
    <div className="container">
      <h1 className="py-3 text-center">Product Manager</h1>
      <form className="row pt-3" onSubmit={ handleSubmit }>
        <div className="col-12 col-md-8 mb-3">
          <label className="form-label fw-bold">Title</label>
          <input type="text" value={ state.title.value } onChange={ handleChange } name="title" className={`form-control ${ state.title.error?.result }`} />
          {
            state.title.error !== null && (<p className={`${ state.title.error?.result === 'is-valid' ? 'valid-feedback' : 'invalid-feedback' }`}> {state.title.error?.message }</p>)
          }
        </div>

        <div className="col-12 col-md-4 mb-3">
          <label className="form-label fw-bold">Price</label>
          <input type="number" name="price" value={ state.price.value } onChange={ handleChange } className={`form-control ${ state.price.error?.result }`} />
          {
            state.price.error !== null && (<p className={`${ state.price.error?.result === 'is-valid' ? 'valid-feedback' : 'invalid-feedback' }`}> {state.price.error?.message }</p>)
          }
        </div>

        <div className="col-12 mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea name="description" className={`form-control ${ state.description.error?.result }`} onChange={ handleChange } value={ state.description.value }></textarea>
          {
            state.description.error !== null && (<p className={`${ state.description.error?.result === 'is-valid' ? 'valid-feedback' : 'invalid-feedback' }`}> {state.description.error?.message }</p>)
          }
        </div>

        <div className="col-12 mb-3 d-flex justify-content-center">
          <div>
          <button className="btn btn-primary" type="submit">{ product ? 'Update' : 'Create'} Product</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductForm;