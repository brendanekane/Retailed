class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.integer :user_id, null: false
      t.float :price, null: false
      t.string :designer, null: false
      t.string :name, null: false
      t.string :clothing_type, null: false
      t.string :size, null: false
      t.string :clothing_category, null: false

      t.timestamps
    end
    add_index :products, :user_id
  end
end
