# == Schema Information
#
# Table name: collection_feeds
#
#  id            :integer          not null, primary key
#  feed_id       :integer          not null
#  collection_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class CollectionFeed < ActiveRecord::Base
  validates :feed_id, :collection_id, presence: true
  validates :feed_id, uniqueness: { scope: :collection_id }

  belongs_to :feed
  belongs_to :collection
end
