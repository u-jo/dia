class AddRememberTokenToUsers < ActiveRecord::Migration
  def change
  	add_column :api_users, :remember_token, :string
  	add_index :api_users, :remember_token
  end
end
