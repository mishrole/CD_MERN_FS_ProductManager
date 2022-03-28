import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewProduct from '../views/NewProduct';
import UpdateProduct from '../views/UpdateProduct';
import ViewProduct from '../views/ViewProduct';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={ <NewProduct /> }/>
      <Route path="/:id" element={ <ViewProduct /> } />
      <Route path="/:id/edit" element={ <UpdateProduct /> } />
    </Routes>
  )
}

export default Root;