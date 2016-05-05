json.id collection_item.id
json.name collection_item.name
json.user_id collection_item.user_id

sorted_feeds = collection_item.feeds.sort do |feed1, feed2|
  collection_item.collection_feeds.find_by(feed_id: feed1.id).id <=> collection_item.collection_feeds.find_by(feed_id: feed2.id).id
end

json.feeds sorted_feeds
