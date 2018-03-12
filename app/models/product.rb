class Product < ApplicationRecord
  validates :user_id, :price, :designer, :name, :clothing_type, :size, :clothing_category, presence: true

  belongs_to :user
  has_many :product_photos, dependent: :destroy
  accepts_nested_attributes_for :product_photos

end
