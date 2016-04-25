# Phase 2: Feeds Model, API, basic APIUtil, Actions, and Store

## Rails
### Models
* Feed

### Controllers
* Api::FeedsController (index, show)

### Views
* api/feeds/index.json.jBuilder
* api/feeds/show.json.jBuilder

## Flux
### Views (React Components)


### Stores
* FeedStore
  - `_feeds`
  - `_selectedFeed`
  - `_collectionFeed`

### Actions
* ApiActions.receiveAllFeeds -> triggered by ApiUtil
* ApiActions.receiveCollectionFeed

### ApiUtil
* ApiUtil.fetchAllFeeds
* ApiUtil.fetchCollectionFeed

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
* Feedjira (Gem)
