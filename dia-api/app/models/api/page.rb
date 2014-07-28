class Api::Page < ActiveRecord::Base
	belongs_to :diary
	validates :diary_id, presence: true
end
