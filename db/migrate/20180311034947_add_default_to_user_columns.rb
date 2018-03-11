class AddDefaultToUserColumns < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :location, :string, default: 'United States'
    change_column :users, :weight, :integer, default: 0
    change_column :users, :height, :integer, default: 0
  end
end
