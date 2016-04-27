json.title @feedjira_feed.title
json.url  @feedjira_feed.url
json.description @feedjira_feed.description

entries = @feedjira_feed.entries.map do |entry|
  entry_obj = {}
  entry.each do |key, value|
    entry_obj[key] = value
  end
  entry_obj
end

json.entries do
  json.array! entries
end
