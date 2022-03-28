import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewProduct from '../views/NewProduct';
import ShowProduct from '../views/ShowProduct';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={ <NewProduct /> }/>
      <Route path="/:id" element={ <ShowProduct /> } />
    </Routes>
  )
}

export default Root;