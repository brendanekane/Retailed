json.extract! user, :id, :email, :transactions
json.product_ids do
  json.array! user.products
end
