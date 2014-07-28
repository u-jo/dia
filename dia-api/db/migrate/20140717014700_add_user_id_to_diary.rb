class AddUserIdToDiary < ActiveRecord::Migration
  def change
  	add_column :api_diaries, :user_id, :integer
  	add_index :api_diaries, :user_id
  end
end
