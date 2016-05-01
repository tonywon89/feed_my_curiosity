
curious_user = User.create!(username: "CuriousUser", password: "curious")
User.create!(username: "albert", password: "curious")
walid = User.create!(username: "walid", password: "curious")
User.create!(username: "ian", password: "curious")
User.create!(username: "jeremy", password: "curious")

engadget = Feed.create!(name: "Engadget", url: "http://www.engadget.com/rss.xml")
lifehacker = Feed.create!(name: "Lifehacker", url: "http://lifehacker.com/rss")
make_use_of = Feed.create!(name: "MakeUseOf", url: "	http://feeds.feedburner.com/Makeuseof")
wired_science = Feed.create!(name: "Wired Science", url: "http://www.wired.com/category/science/feed/")
codrops = Feed.create!(name: "Codrops", url: "http://tympanus.net/codrops/feed/")
ars_technica = Feed.create!(name: "Ars Technica", url: "http://feeds.arstechnica.com/arstechnica/science")
the_verge = Feed.create!(name: "The Verge", url: "http://www.theverge.com/rss/index.xml")

curious_user_1 = Collection.create!(name: "Curious Collection 1", user_id: 1)
curious_user_2 = Collection.create!(name: "Curious Collection 2", user_id: 1)
curious_user_3 = Collection.create!(name: "Curious Collection 3", user_id: 1)
curious_user_4 = Collection.create!(name: "Curious Collection 4", user_id: 1)
walid_1 = Collection.create!(name: "Walid Collection 1", user_id: 3)
walid_2 = Collection.create!(name: "Walid Collection 2", user_id: 3)
walid_3 = Collection.create!(name: "Walid Collection 2", user_id: 3)

curious_user_1.collection_feeds.create!(feed_id: 1)
curious_user_1.collection_feeds.create!(feed_id: 2)
curious_user_1.collection_feeds.create!(feed_id: 3)
curious_user_1.collection_feeds.create!(feed_id: 4)

curious_user_2.collection_feeds.create!(feed_id: 5)
curious_user_2.collection_feeds.create!(feed_id: 6)

curious_user_3.collection_feeds.create!(feed_id: 7)

curious_user_4.collection_feeds.create!(feed_id: 1)

walid_1.collection_feeds.create!(feed_id: 2)
walid_1.collection_feeds.create!(feed_id: 4)

walid_2.collection_feeds.create!(feed_id: 5)

walid_3.collection_feeds.create!(feed_id: 3)
