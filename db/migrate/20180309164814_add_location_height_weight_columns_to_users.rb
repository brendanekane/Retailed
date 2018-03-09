class AddLocationHeightWeightColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :height, :integer
    add_column :users, :weight, :integer
    add_column :users, :location, :string
  end
end
