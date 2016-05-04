class Article < ActiveRecord::Base
  validates :title, :url, presence: true
  validates :user, presence: true
  belongs_to :user
end
