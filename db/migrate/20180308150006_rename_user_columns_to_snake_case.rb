class RenameUserColumnsToSnakeCase < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :passwordDigest, :password_digest
    rename_column :users, :sessionToken, :session_token
  end
end
