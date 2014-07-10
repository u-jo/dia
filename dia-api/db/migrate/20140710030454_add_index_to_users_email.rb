class AddIndexToUsersEmail < ActiveRecord::Migration
  def change
  	add_index :api_users, :email, unique: true
  end
end
