class ProductPhoto < ApplicationRecord
  validates :product_id, presence: true

  belongs_to :product

end
