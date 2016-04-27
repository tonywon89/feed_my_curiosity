class Feed < ActiveRecord::Base
  validates :name, :url, presence: true

  def parse
    Feedjira::Feed.fetch_and_parse(url)
  end
end
