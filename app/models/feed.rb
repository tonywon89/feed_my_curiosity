class Feed < ActiveRecord::Base
  validates :name, :url, presence: true

  def parse
    xml = Faraday.get(url).body
    feed = Feedjira::Feed.parse xml
    {id: id, feed: feed}
  end
end
