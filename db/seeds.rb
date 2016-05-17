
curious_user = User.create!(username: "CuriousUser", password: "curious")
tony = User.create!(username: "tony", password: "curious")

lifehacker = Feed.create!(name: "Lifehacker", url: "http://lifehacker.com/rss")
make_use_of = Feed.create!(name: "MakeUseOf", url: "http://feeds.feedburner.com/Makeuseof")
wired_science = Feed.create!(name: "Wired Science", url: "http://www.wired.com/category/science/feed/")
codrops = Feed.create!(name: "Codrops", url: "http://tympanus.net/codrops/feed/")
ars_technica = Feed.create!(name: "Ars Technica", url: "http://feeds.arstechnica.com/arstechnica/science")
the_verge = Feed.create!(name: "The Verge", url: "http://www.theverge.com/rss/index.xml")
popular_science = Feed.create!(name: "Popular Science", url: "http://www.popsci.com/rss.xml")
engadget = Feed.create!(name: "Engadget", url: "http://www.engadget.com/rss.xml")
mashable= Feed.create!(name: "Mashable", url: "http://feeds.mashable.com/Mashable")

curious_user_1 = Collection.create!(name: "Collection of Curiosity", user_id: 1)
curious_user_2 = Collection.create!(name: "Gathering of Awesomeness", user_id: 1)
curious_user_3 = Collection.create!(name: "Feeds of Coolness", user_id: 1)
curious_user_4 = Collection.create!(name: "Feeding Frenzy", user_id: 1)
tony_1 = Collection.create!(name: "Tony's Collection 1", user_id: 2)
tony_2 = Collection.create!(name: "Tony's Collection 2", user_id: 2)
tony_3 = Collection.create!(name: "Tony's Collection 2", user_id: 2)

article1 = Article.create!(
  title: "Let's Talk About YOUR MOM in This Friday Open Thread",
  url:
   "http://hackerspace.kinja.com/lets-talk-about-your-mom-in-this-friday-open-thread-1775061190",
  published: "2016-05-06T14:30:00.000Z",
  entry_id: "1775061190",
  summary:
   "<img src=\"https://i.kinja-img.com/gawker-media/image/upload/s--f4tIvsKz--/c_fit,fl_progressive,q_80,w_636/qrje4jypkjkeswa2kotn.jpg\" /><p class=\"first-text\">Hello, how are you? Welcome to the Friday Open Thread. Oh, and just in case you forgot: Mother’s Day is this Sunday! Come on, people! You had a <em>whole year</em> to get ready! PANIC! You have only two days to scramble and get your mom a card, flowers, and something nice and thoughtful! Hurry! Hurry!</p><p><a href=\"http://hackerspace.kinja.com/lets-talk-about-your-mom-in-this-friday-open-thread-1775061190\">Read more...</a></p>",
  content: nil,
  author: "Rat Fink on Hackerspace, shared by Andy Orin to Lifehacker",
  user_id: 1
)

article2 = Article.create!(
  title: "The Best Free Data Recovery Tools for Windows",
  url: "http://www.makeuseof.com/tag/best-free-data-recovery-tools-windows/",
  published: "2016-05-05T20:00:00.000Z",
  entry_id: "http://www.makeuseof.com/?p=559329",
  summary:
   "<div><img width=\"297\" height=\"141\" src=\"http://cdn.makeuseof.com/wp-content/uploads/2016/04/windows-10-task-view-297x141.jpg?b06cf3\" class=\"attachment-featured-thumb-15 size-featured-thumb-15 wp-post-image\" alt=\"windows-10-task-view\" /></div><p>Data loss can strike at any time, whether it&#8217;s a file you&#8217;ve accidentally deleted or a drive error that&#8217;s wiped everything out. We will highlight the best free data recovery tools for Windows to help get your precious files back. Along the way we&#8217;ll show you how to check if your data is actually deleted, whether using a data recovery program is suitable for you, along with explaining how they actually achieve what they promise &#8212; and no, it isn&#8217;t magic. If you&#8217;ve got a free data recovery tool that you recommend then please let us know in the comments section....</p><p>Read the full article: <a href='http://www.makeuseof.com/tag/best-free-data-recovery-tools-windows/'>The Best Free Data Recovery Tools for Windows</a></p><div class=\"feedflare\">\n<a href=\"http://feeds.feedburner.com/~ff/Makeuseof?a=cNlOog_rehA:FvqGzCqBuLo:qj6IDK7rITs\"><img src=\"http://feeds.feedburner.com/~ff/Makeuseof?d=qj6IDK7rITs\" border=\"0\"></img></a> <a href=\"http://feeds.feedburner.com/~ff/Makeuseof?a=cNlOog_rehA:FvqGzCqBuLo:gIN9vFwOqvQ\"><img src=\"http://feeds.feedburner.com/~ff/Makeuseof?i=cNlOog_rehA:FvqGzCqBuLo:gIN9vFwOqvQ\" border=\"0\"></img></a> <a href=\"http://feeds.feedburner.com/~ff/Makeuseof?a=cNlOog_rehA:FvqGzCqBuLo:ZC7T4KBF6Nw\"><img src=\"http://feeds.feedburner.com/~ff/Makeuseof?d=ZC7T4KBF6Nw\" border=\"0\"></img></a> <a href=\"http://feeds.feedburner.com/~ff/Makeuseof?a=cNlOog_rehA:FvqGzCqBuLo:yIl2AUoC8zA\"><img src=\"http://feeds.feedburner.com/~ff/Makeuseof?d=yIl2AUoC8zA\" border=\"0\"></img></a>\n</div>",
  content: nil,
  author: "Joe Keeley",
  user_id: 1
)

article3 = Article.create!(
  title: "Because failure is an option SpaceX can do stuff like land rockets on a boat",
  url:
   "http://arstechnica.com/science/2016/05/because-failure-is-an-option-spacex-can-do-stuff-like-land-rockets-on-a-boat/",
  published: "2016-05-06T06:41:17.000Z",
  entry_id: "http://arstechnica.com/?p=877173",
  summary:
   "In the middle of the night, amid fire and smoke, a second rocket appeared on a boat.",
  content:
   "<div id=\"rss-wrap\">\n<div>\n      <img src=\"http://cdn.arstechnica.net/wp-content/uploads/2016/05/26751237322_22dc7de0f4_k-980x653.jpg\"><p class=\"caption\" style=\"font-size:0.8em\">The Falcon 9 rocket sliced a dazzling arc through the early morning Florida sky on Friday. (credit: SpaceX)</p>\n</div>\n\n\n\n\n\n<div><a name=\"page-1\"></a></div>\n<p>NASA’s legendary flight director Gene Kranz entitled his memoir <em>Failure is Not an Option</em>, referring to his days in mission control from the Mercury missions through the Apollo program. That mindset helped Kranz and teams of engineers at Johnson Space Center heroically return the crew of Apollo 13 safely home. But there is a belief among some that, since the heady Apollo days, such an attitude has made NASA’s managers too timid and too risk averse.</p>\n<p>More than a decade ago, even before the failure of his first Falcon 1 rocket, Elon Musk had already made it clear he did not adhere to this belief. During an interview for a 2005 article in <em>Fast Company,</em> the founder of SpaceX gave what has become one of his most enduring quotes: \"There's a silly notion that failure's not an option at NASA,” Musk <a href=\"http://www.fastcompany.com/52065/hondas-space\">said</a>. “Failure is an option here. If things are not failing, you are not innovating enough.\"</p>\n<p>That attitude was on full display early Friday morning when a Falcon 9 rocket blasted off from Cape Canaveral along the Florida coast, beneath a black sky full of stars. As the rocket thundered upward, back on Earth, a few hundred miles out in the Atlantic Ocean, a barge about the size of a football field waited to catch it. But this would be no easy grab.</p>\n</div><p><a href=\"http://arstechnica.com/science/2016/05/because-failure-is-an-option-spacex-can-do-stuff-like-land-rockets-on-a-boat/#p3\">Read 9 remaining paragraphs</a> | <a href=\"http://arstechnica.com/science/2016/05/because-failure-is-an-option-spacex-can-do-stuff-like-land-rockets-on-a-boat/?comments=1\">Comments</a></p><div class=\"feedflare\">\n<a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=6NkBGaRckXk:mnuH9pymH8g:V_sGLiPBpWU\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?i=6NkBGaRckXk:mnuH9pymH8g:V_sGLiPBpWU\" border=\"0\"></img></a> <a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=6NkBGaRckXk:mnuH9pymH8g:F7zBnMyn0Lo\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?i=6NkBGaRckXk:mnuH9pymH8g:F7zBnMyn0Lo\" border=\"0\"></img></a> <a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=6NkBGaRckXk:mnuH9pymH8g:qj6IDK7rITs\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?d=qj6IDK7rITs\" border=\"0\"></img></a> <a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=6NkBGaRckXk:mnuH9pymH8g:yIl2AUoC8zA\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?d=yIl2AUoC8zA\" border=\"0\"></img></a>\n</div>",
  author: "Eric Berger",
  user_id: 1
)

article4 = Article.create!(
  title: "Strange X-ray sources are shooting ions at us at 20 percent of light speed",
  url:
   "http://arstechnica.com/science/2016/05/mysterious-x-ray-binaries-have-relativistic-gas-outflows/",
  published: "2016-05-05T21:00:52.000Z",
  entry_id: "http://arstechnica.com/?p=875675",
  summary: "Mysterious X-ray binaries have relativistic gas outflows.",
  content:
   "<div id=\"rss-wrap\">\n<div>\n      <img src=\"http://cdn.arstechnica.net/wp-content/uploads/2016/05/Powerful_winds_from_an_ultra-luminous_X-ray_binary_node_full_image_2-640x360.jpg\"><p class=\"caption\" style=\"font-size:0.8em\">Artist's impression of a ULX, which could be either a black hole or a neutron star in this image. Coming \"toward us\" is the outflow of gas, moving at relativistic speed.  (credit: <a rel=\"nofollow\" class=\"caption-link\" href=\"http://www.esa.int/spaceinimages/Images/2016/04/Powerful_winds_from_an_ultra-luminous_X-ray_binary\">ESA–C. Carreau</a>)</p>\n</div>\n\n\n\n\n\n<div><a name=\"page-1\"></a></div>\n<p>Researchers are gaining ground in the struggle to understand the mysterious objects known as UltraLuminous X-ray sources (ULXs). These objects, named for their extreme brightness at X-ray wavelengths, are thought to be dense, compact objects like black holes or neutron stars. Their luminosity (which extends to other wavelengths) arises as they actively draw matter from an orbiting companion.</p>\n<p>“We think these ‘ultra-luminous X-ray sources’ are somewhat special binary systems, sucking up gas at a much higher rate than an ordinary X-ray binary,” <a href=\"http://www.esa.int/Our_Activities/Space_Science/Powerful_winds_spotted_from_mysterious_X-ray_binaries\">said</a> Ciro Pinto, a research associate from the Institute of Astronomy in Cambridge, UK, and author of a recent study. “Some host highly magnetised neutron stars, while others might conceal the long-sought-after intermediate-mass black holes, which have masses around 1000 times the mass of the Sun. But in the majority of cases, the reason for their extreme behaviour is still unclear.”</p>\n<p>It’s been difficult to study them in detail because we've lacked the sensitivity needed to identify the emission lines and/or absorption lines created by specific elements. When light passes through material such as gas, certain wavelengths are absorbed by elements in the gas, leaving a blank line in the light source’s spectrum. Emission lines are light emitted by the element itself.</p>\n</div><p><a href=\"http://arstechnica.com/science/2016/05/mysterious-x-ray-binaries-have-relativistic-gas-outflows/#p3\">Read 10 remaining paragraphs</a> | <a href=\"http://arstechnica.com/science/2016/05/mysterious-x-ray-binaries-have-relativistic-gas-outflows/?comments=1\">Comments</a></p><div class=\"feedflare\">\n<a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=HHKEr-54vRk:KlXN5N2YctY:V_sGLiPBpWU\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?i=HHKEr-54vRk:KlXN5N2YctY:V_sGLiPBpWU\" border=\"0\"></img></a> <a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=HHKEr-54vRk:KlXN5N2YctY:F7zBnMyn0Lo\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?i=HHKEr-54vRk:KlXN5N2YctY:F7zBnMyn0Lo\" border=\"0\"></img></a> <a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=HHKEr-54vRk:KlXN5N2YctY:qj6IDK7rITs\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?d=qj6IDK7rITs\" border=\"0\"></img></a> <a href=\"http://feeds.arstechnica.com/~ff/arstechnica/science?a=HHKEr-54vRk:KlXN5N2YctY:yIl2AUoC8zA\"><img src=\"http://feeds.feedburner.com/~ff/arstechnica/science?d=yIl2AUoC8zA\" border=\"0\"></img></a>\n</div>",
  author: "Xaq Rzetelny",
  user_id: 1
)

article5 = Article.create!(
  title: "Mount St. Helens Is Recharging Its Magma Stores, Setting Off Earthquake Swarms",
  url:
   "http://www.wired.com/2016/05/mount-st-helens-recharging-magma-stores-setting-off-earthquake-swarms/",
  published: "2016-05-05T21:26:03.000Z",
  entry_id: "http://www.wired.com/?p=2014758",
  summary:
   "<div class=\"rss_thumbnail\"><img src=\"http://www.wired.com/wp-content/uploads/2016/05/GettyImages-dv516010-660x438.jpg\" alt=\"Mount St. Helens Is Recharging Its Magma Stores, Setting Off Earthquake Swarms\" /></div>Mount St. Helens in Washington may have been quiet at the surface since 2008, but that doesn't mean it isn't recharging for the next one. The post <a href=\"http://www.wired.com/2016/05/mount-st-helens-recharging-magma-stores-setting-off-earthquake-swarms/\">Mount St. Helens Is Recharging Its Magma Stores, Setting Off Earthquake Swarms</a> appeared first on <a href=\"http://www.wired.com\">WIRED</a>.",
  content: nil,
  author: "Erik Klemetti",
  user_id: 1
)

curious_user_1.collection_feeds.create!(feed_id: 1)
curious_user_1.collection_feeds.create!(feed_id: 2)
curious_user_1.collection_feeds.create!(feed_id: 3)

curious_user_2.collection_feeds.create!(feed_id: 5)
curious_user_2.collection_feeds.create!(feed_id: 6)

curious_user_3.collection_feeds.create!(feed_id: 7)

curious_user_4.collection_feeds.create!(feed_id: 4)
curious_user_4.collection_feeds.create!(feed_id: 8)

tony_1.collection_feeds.create!(feed_id: 2)
tony_1.collection_feeds.create!(feed_id: 4)

tony_2.collection_feeds.create!(feed_id: 5)

tony_3.collection_feeds.create!(feed_id: 3)
