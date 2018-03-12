json.product do
  json.partial! 'api/products/product', product: @product
end
json.photos do
  @product.product_photos.each do |photo|
    json.set! photo.id do
      json.product_id photo.product_id
      json.image_url photo.image.url
    end
  end
end
