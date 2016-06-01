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
    begin
      feed = Feedjira::Feed.fetch_and_parse url
      {id: id, feed: feed}
    rescue
      feed = {
        title: "Feed could not be fetched",
        url: "http://www.feedmycuriosity.site",
        description: "Try again later to get this feed",
        entries: [
          {
            title: "There is no entry",
            url: "http://www.feedmycuriosity.site",
            summary: "There is no summary",
            content: "There is no content",
            author: "There is no author"
          }
        ]
      }
      {id: id, feed: feed, error: true}
    end
  end
end
