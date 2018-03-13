# json.id product.id
# json.owner_id product.user_id
json.extract! product, :id, :user_id, :designer, :size, :name, :price, :description
json.created_at product.created_at.to_formatted_s(:long_ordinal)
json.photo_ids product.product_photos.pluck(:id)
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
