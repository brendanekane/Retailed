import * as ProductApiUtil from 'util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const getProducts = () => dispatch => {
  return (
  ProductApiUtil.getProducts()
  .then(products => dispatch(receiveAllProducts(products)))
  );
};

export const getUserProducts = (user_id) => dispatch => {
  return (
    ProductApiUtil.getUserProducts(user_id)
    .then(products => dispatch(receiveAllProducts(products)))
  );
};

export const getProduct = id => dispatch => (
  ProductApiUtil.getProduct(id)
  .then(product => dispatch(receiveProduct(product)))
);

export const createProduct = product => dispatch => {
  return (
    ProductApiUtil.createProduct(product)
    .then(product => dispatch(receiveProduct(product))),
    err => (dispatch(receiveProductErrors(err.responseJSON)))
  );
};

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

const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});
