class Api::Diary < ActiveRecord::Base
  belongs_to :user
  has_many :pages, dependent: :destroy
  validates :user_id, presence: true
end
