class Product < ApplicationRecord
  validates :user_id, :price, :designer, :name, :clothing_type, :size,
  :clothing_category, presence: true

  belongs_to :user

  has_many :product_photos, dependent: :destroy, inverse_of: :product
  accepts_nested_attributes_for :product_photos

  has_many :cart_items, dependent: :destroy

end
