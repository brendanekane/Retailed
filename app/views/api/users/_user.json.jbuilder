json.extract! user, :id, :email, :transactions, :height, :weight, :location
json.products do
  json.array! user.products
end
json.image_url asset_path(user.avatar.url)
