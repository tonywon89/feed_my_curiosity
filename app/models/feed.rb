# == Schema Information
#
# Table name: feeds
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feed < ActiveRecord::Base
  validates :name, :url, presence: true

  has_many :collection_feeds, dependent: :destroy
  has_many :collections, through: :collection_feeds, source: :collection

  def parse
    xml = Faraday.get(url).body
    feed = Feedjira::Feed.parse xml
    {id: id, feed: feed}
  end
end
