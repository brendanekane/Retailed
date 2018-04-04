class ProductPhoto < ApplicationRecord
  validates :product, presence: true

  belongs_to :product, inverse_of: :product_photos

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "default_photo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
