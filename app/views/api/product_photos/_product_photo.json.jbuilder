json.product_id product.id
url = asset_path(product_photo.image.url)
url[3] = url[3] + 's'
json.image_url asset_path(url)
