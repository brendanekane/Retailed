json.extract! user, :id, :email, :transactions, :height, :weight, :location
# json.products do
#   json.array! user.products
# end
json.product_ids user.products.pluck(:id)

url = asset_path(user.avatar.url)
url[3] = url[3] + 's'
json.image_url asset_path(url)
