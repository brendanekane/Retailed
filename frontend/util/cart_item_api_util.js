export const createItem = productId => (
  $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: {product_id: productId}
  })
);

export const deleteItem = id => {
  $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${id}`
  })
}
