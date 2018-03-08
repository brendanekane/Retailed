json.extract! user, :id, :email
json.product_ids do
  json.array! user.products
end
