import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Product = ({ dispatch, product }) => {
  function handleDelete(id) {
    dispatch({
      type: 'product/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={product} />
    </div>
  );
};

// export default Products;
export default connect(({ product }) => ({
  product,
}))(Product);
