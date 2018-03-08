class CreateProductPhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :product_photos do |t|
      t.integer :product_id, null: false

      t.timestamps
    end
    add_index :product_photos, :product_id
  end
end
