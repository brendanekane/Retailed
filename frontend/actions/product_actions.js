import * as ProductApiUtil from 'util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const getProducts = () => dispatch => {
  return (
  ProductApiUtil.getProducts()
  .then(products => dispatch(receiveAllProducts(products)))
  );
};

export const getUserProducts = (user_id) => dispatch => {
  debugger
  return (
    ProductApiUtil.getUserProducts(user_id)
    .then(products => dispatch(receiveAllProducts(products)))
  );
};

export const getProduct = id => dispatch => (
  ProductApiUtil.getProduct(id)
  .then(product => dispatch(receiveProduct(product)))
);

export const createProduct = product => dispatch => (
  ProductApiUtil.createProduct(product)
  .then(product => dispatch(receiveProduct(product)))
);

export const updateProduct = product => dispatch => (
  ProductApiUtil.updateProduct(product)
  .then(product => dispatch(receiveProduct(product)))
);

export const deleteProduct = id => dispatch => (
  ProductApiUtil.deleteProduct(id)
  .then(product => dispatch(removeProduct(id)))
);


const receiveAllProducts = products => {
  return({
  type: RECEIVE_ALL_PRODUCTS,
  products
  });
};

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  id
});
