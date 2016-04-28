json.array! @collections do |collection|
  json.name collection.name
  json.user_id collection.user_id
  json.feeds collection.feeds
end
