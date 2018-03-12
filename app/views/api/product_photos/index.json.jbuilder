@product_photo.each do |photo|
  json.set! photo.id do
    json.partial! 'api/product_photos/product_photo' photo: photo
  end
end 
