json.product do
  json.partial! 'api/products/product', product: @product
end
json.photos do
  @product.product_photos.each do |photo|
    json.set! photo.id do
      json.product_id photo.product_id
      url = photo.image.url
      url[3] = url[3] + 's'
      json.image_url url
    end
  end
end
