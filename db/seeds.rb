
User.create!(email: "tony", password: "curious")
User.create!(email: "albert", password: "curious")
User.create!(email: "walid", password: "curious")
User.create!(email: "ian", password: "curious")
User.create!(email: "jeremy", password: "curious")

Feed.create!(name: "engadget", url: "http://www.engadget.com/rss.xml")
Feed.create!(name: "lifehacker", url: "http://lifehacker.com/rss")
Feed.create!(name: "national_geographic", url: "http://news.nationalgeographic.com/rss/index.rss")
Feed.create!(name: "wired_science", url: "http://www.wired.com/category/science/feed/")
# Feed.create!(name: "codrops", url: "http://tympanus.net/codrops/feed/")
Feed.create!(name: "discovery", url: "http://www.discovery.com/feed/")
