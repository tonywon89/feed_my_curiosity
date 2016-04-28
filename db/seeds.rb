
tony = User.create!(email: "tony", password: "curious")
User.create!(email: "albert", password: "curious")
walid = User.create!(email: "walid", password: "curious")
User.create!(email: "ian", password: "curious")
User.create!(email: "jeremy", password: "curious")

engadget = Feed.create!(name: "engadget", url: "http://www.engadget.com/rss.xml")
lifehacker = Feed.create!(name: "lifehacker", url: "http://lifehacker.com/rss")
national_geographic = Feed.create!(name: "national_geographic", url: "http://news.nationalgeographic.com/rss/index.rss")
wired_science = Feed.create!(name: "wired_science", url: "http://www.wired.com/category/science/feed/")
codrops = Feed.create!(name: "codrops", url: "http://tympanus.net/codrops/feed/")
discovery = Feed.create!(name: "discovery", url: "http://www.discovery.com/feed/")
ars_technica = Feed.create!(name: "ars_technica", url: "http://feeds.arstechnica.com/arstechnica/science")

tony_1 = Collection.create!(name: "Tony Collection 1", user_id: 1)
tony_2 = Collection.create!(name: "Tony Collection 2", user_id: 1)
tony_3 = Collection.create!(name: "Tony Collection 3", user_id: 1)
tony_4 = Collection.create!(name: "Tony Collection 4", user_id: 1)
walid_1 = Collection.create!(name: "Walid Collection 1", user_id: 3)
walid_2 = Collection.create!(name: "Walid Collection 2", user_id: 3)
walid_3 = Collection.create!(name: "Walid Collection 2", user_id: 3)

tony_1.collection_feeds.create!(feed_id: 1)
tony_1.collection_feeds.create!(feed_id: 2)
tony_1.collection_feeds.create!(feed_id: 3)
tony_1.collection_feeds.create!(feed_id: 4)

tony_2.collection_feeds.create!(feed_id: 5)
tony_2.collection_feeds.create!(feed_id: 6)

tony_3.collection_feeds.create!(feed_id: 7)

tony_4.collection_feeds.create!(feed_id: 1)

walid_1.collection_feeds.create!(feed_id: 2)
walid_1.collection_feeds.create!(feed_id: 4)

walid_2.collection_feeds.create!(feed_id: 5)

walid_3.collection_feeds.create!(feed_id: 3)
