# Flux Cycles

## Feed Cycles

### Feeds API Request Action

* `fetchAllFeeds`
  0. invoked from `FeedsIndex`
  `didMount`
  0. `GET /api/feeds` is called
  0. `receiveAllFeeds` is set as the callback.

* `fetchSingleFeed`
  0. invoked when feed is clicked from `FeedIndexItem`, `FeedItem` within `CollectionIndexItem`,
  0. `GET /api/feeds/:id` is called
  0. `receiveSingleFeed` is set as the callback

* `fetchCollectionFeed`
  0. invoked by `SidebarCollectionIndexItem`
  0. `GET /api/feeds/:id` is called
  0. `receiveCollectionFeed` is set as the callback

### Feeds API Response Actions

* `receiveAllFeeds`
  0. invoked from an API callback
  0. `FeedStore` updates `_feeds` and emits change.

* `receiveSingleFeed`
 0. invoked from an API callback
 0. `FeedStore` updates `_feed` and emits change.

* `receiveCollectionFeed`
  0. invoked from an API callback
  0. `FeedStore` updates `_collectionFeed`

### FeedStore Listeners

* `FeedsIndex`
* `FeedDetail`
* `CollectionFeedDetail`

## Collection Cycles

### Collections API Request

* `fetchCollections(user)`
  0. invoked from `CollectionIndex`, `SidebarCollectionIndex`, and `AddFeedCollectionIndex`
  0. `GET /api/users/:user_id/collections` is called
  0. `receiveCollections` is set as the callback

* `createCollection`
  0. invoked from new collection button `onClick` in `CollectionsIndex` and `AddFeedSidebar` form
  0. `POST /api/collections` is called
  0. `addCollection` is set as the callback to update the collections

* `fetchSingleCollection`
 0. invoked from `CollectionArticles`
 0. `GET /api/collections/:id` is called
 0. `receiveSingleCollection is set as the callback`

* `updateCollection`
 0. invoked from `AddFeedCollectionIndexItem` and `CollectionIndexItem`
 0. `PATCH /api/collections/:id` is called
 0. `updateCollection` is set as the callback  

* `destroyCollection`
  0. invoked from `CollectionIndex`
  0. `DELETE /api/collections/:id` is called
  0. `removeCollection` is set as the callback

### Collections API Response Actions

* `receiveCollections(user)`
  0. invoked from an API callback
  0. `CollectionStore` updates `_collections` and emits change.

* `addCollection`
  0. invoked from an API callback
  0. `CollectionStore` adds collection to `_collections` and emits change

* `receiveSingleCollection`
  0. invoked from an API callback
  0. `CollectionStore` updates `_selectedCollection` and emits change

* `updateCollection`
  0. invoked from an API callback
  0. `CollectionStore` replaces old collection with updated collection in `_collections` and emits change

* `removeCollection`
  0. invoked from an API callback
  0. `CollectionStore` removes collection from `_collections` and emits change

### CollectionStore Listeners

* `CollectionsIndex`
* `CollectionArticles`
* `AddFeedCollectionIndex`
* `SidebarCollectionIndex`

## Collection_Feeds Cycles

### API Request
* `addFeedToCollection`
  0. invoked by `AddFeedCollectionIndexItem`
  0. `POST /api/collection_feeds`
  0. `updateCollection` set as callback

* `removeFeedFromCollection`
  0. invoked by `CollectionIndexItem`, `CollectionFeedDetail`
  0. `DELETE /api/collection_feeds/:id`
  0. `updateCollection` set as callback

### API Response

* `updateCollection`
  0. invoked by an API callback
  0. `CollectionStore` changes to reflect change
  0. `FeedStore` responds with change to have add button or not

### Store Listeners

* All listeners of `FeedStore` and `CollectionStore`

## Article Cycles

### Articles API Request

* `saveArticle`
  0. invoked by `ArticleDetail`
  0. `POST /api/articles` is made
  0. `associateArticle` is set as the callback

* `unsaveArticle`
  0. invoked by `ArticleDetail`, `CollectionArticles`
  0. `DELETE /api/articles/:id`
  0. `removeCollectionArticle` is set as the callback

* `associateArticle`
  0. invoked by `saveArticle`
  0. `POST /api/saved_collection_articles`
  0. `notifySave` is set as the callback

### Articles API Response

* `notifySave`
  0. invoked by an API callback
  0. alerts that a save has been made

* `removeCollectionArticle`
  0. invoked by an API callback
  0. `CollectionStore` updates `_selectedCollections` to reflect new state of collection and emits change

### Articles Client Actions (no need for API)

* `receiveArticle`
  0. invoked by `FeedIndexItemArticle`, `ArticleItem`
  0. `ArticleStore` update `_article` and emits change

* `removeArticle`
  0. invoked when user clicks the close button in `PopOutDetails`

### ArticleStore Listeners

* `ArticleDetail`
