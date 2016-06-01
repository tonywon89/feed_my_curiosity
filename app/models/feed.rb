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
        title: "'#{name}' could not be loaded",
        url: "#",
        description: "Sorry, the site is currently down",
        entries: [
          {
            title: "Sorry, the site is currently down",
            url: "#",
            summary: "Sorry, the site is currently down",
            content: "Sorry, the site is currently down",
            author: "Sorry, the site is currently down"
          }
        ]
      }
      {id: id, feed: feed, error: true}
    end
  end
end
