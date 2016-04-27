json.id @feedjira_feed[:id]
json.title @feedjira_feed[:feed].title
json.url  @feedjira_feed[:feed].url
json.description @feedjira_feed[:feed].description

entries = @feedjira_feed[:feed].entries.map do |entry|
  entry_obj = {}
  entry.each do |key, value|
    entry_obj[key] = value
  end
  entry_obj
end

json.entries do
  json.array! entries
end
