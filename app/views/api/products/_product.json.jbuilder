json.id product.id
json.owner_id product.user_id
json.photo_ids do
  json.array! product.product_photos
end
json.created_at product.created_at
json.designer product.designer
json.size product.size
json.name product.name
json.price product.price
