class AddAuthTokenToUsers < ActiveRecord::Migration
  def change
  	add_column :api_users, :auth_token, :string, unique: true
  	add_index :api_users, :auth_token
  end
end
