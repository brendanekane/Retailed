export const createItem = productId => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/cart_items',
      data: {product_id: productId}
    })
  );
};

export const deleteItem = id => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/cart_items/${id}`
    })
  );
};


export const getItem = id => {
  return (
    $.ajax({
      method: `GET`,
      url: `api/cart_items/${id}`
    })
  );
};

export const getItems = () => {
  return (
    $.ajax({
      method: `GET`,
      url: 'api/cart_items/'
    })
  );
};
