class CreateCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_items do |t|
      t.integer :product_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
