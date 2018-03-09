export const getProducts = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/products'
    })
  );
};

export const getUserProducts = userId => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/users/${userId}/products`
    })
  );
};

export const getProduct = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/products/${id}`,
    })
  );
};

export const createProduct = product => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/products',
      data: { product }
    })
  );
};

export const updateProduct = product => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/products/${product.id}`,
      data: { product }
    })
  );
};

export const deleteProduct = id => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/products/${id}`,
    })
  );
};
