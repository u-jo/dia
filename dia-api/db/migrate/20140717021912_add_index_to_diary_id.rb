class AddIndexToDiaryId < ActiveRecord::Migration
  def change
  	add_index :api_pages, :diary_id
  end
end
