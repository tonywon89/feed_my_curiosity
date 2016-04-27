class Feed < ActiveRecord::Base
  validates :name, :url, presence: true

  def parse
    # t1 = Time.now
    xml = Faraday.get(url).body
    # t2 = Time.now
    # puts  "After Faraday #{t2 - t1}"
    feed = Feedjira::Feed.parse xml
    # t3 = Time.now
    # puts "After Feedjira #{t3-t2}"
    {id: id, feed: feed}
  end
end
