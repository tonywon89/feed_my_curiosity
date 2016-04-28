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

require 'test_helper'

class CollectionFeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
