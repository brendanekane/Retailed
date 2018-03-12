json.products do
  @products.each do |product|
    json.set! product.id do
      json.partial! 'api/products/product', product: product
    end
  end
end


json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.product_id photo.product_id
      json.image_url photo.image.url
    end
  end
end
