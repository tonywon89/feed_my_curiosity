json.array! @feedjira_feeds do |feed|
  json.title feed.title
  json.url  feed.url
  json.description feed.description

  entries = feed.entries.map do |entry|
    entry_obj = {}
    entry.each do |key, value|
      entry_obj[key] = value
    end
    entry_obj
  end

  json.entries do
    json.array! entries
  end

end
