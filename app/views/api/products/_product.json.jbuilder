# json.id product.id
# json.owner_id product.user_id
json.extract! product, :id, :user_id, :created_at, :designer, :size, :name, :price, :description
json.photo_ids do
  json.array! product.product_photos
end
# json.created_at product.created_at
# json.designer product.designer
# json.size product.size
# json.name product.name
# json.price product.price
# json.description product.description

# When I have the product description in the jbuilder it gives me a
# 500 error and the responseText says undefined method description
# in jbuilder. Without the description it saves fine to the database with
# ajax request from console but not when using form.
