class CreateApiPages < ActiveRecord::Migration
  def change
    create_table :api_pages do |t|
      t.string :page_text
      t.belongs_to :diary

      t.timestamps
    end
  end
end
