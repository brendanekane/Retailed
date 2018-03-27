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
      url = photo.image.url
      url[3] = url[3] + 's'
      json.image_url url
    end
  end
end
