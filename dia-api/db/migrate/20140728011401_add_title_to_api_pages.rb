class AddTitleToApiPages < ActiveRecord::Migration
  def change
  	add_column :api_pages, :title, :string
  end
end
