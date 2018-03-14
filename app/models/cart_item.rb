class CartItem < ApplicationRecord
  validates :product_id, uniqueness: { scope: :user_id, message: "Retail already in cart"}

  belongs_to :user
  belongs_to :product

end
