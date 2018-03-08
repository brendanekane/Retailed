json.id product.id
json.owner_id product.user_id
json.photo_ids do
  json.array! product.product_photos
end
