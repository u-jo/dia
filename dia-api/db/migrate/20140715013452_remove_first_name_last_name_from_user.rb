class RemoveFirstNameLastNameFromUser < ActiveRecord::Migration
  def change
  	remove_column :api_users, :first_name
  	remove_column :api_users, :last_name
  end
end
