# Phase 4: Collections Model, API, basic APIUtil, and Store

## Rails
### Models
* Collection
* CollectionFeed

### Controllers
* Api::CollectionsController (index, show, create, update, destroy)
* Api::CollectionsFeedsController (create, destroy)

### Views
* api/collections/index.json.jbuilder
* api/collections/show.json.jbuilder

## Flux
### Views (React Components)

### Stores
* CollectionStore

### Actions
* ApiActions.receiveCollections
* ApiActions.addCollection
* ApiActions.receiveSingleCollection
* ApiActions.updateCollection
* ApiActions.removeCollection

### ApiUtil
* ApiUtil.fetchCollections
* ApiUtil.createCollection
* ApiUtil.fetchSingleCollection
* ApiUtil.updateCollection
* ApiUtil.destroyCollection

* ApiUtil.addFeedToCollection
* ApiUtil.removeFeedFromCollection

## Gems/Libraries
