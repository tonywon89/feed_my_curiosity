json.id @feedjira_feed[:id]
json.title @feedjira_feed[:feed].title
json.url  @feedjira_feed[:feed].url

description = @feedjira_feed[:feed].description

if description && !description.empty?
  json.description description
else
  json.description "Click here to learn more about '#{feedjira_feed[:feed].title}'"
end

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
