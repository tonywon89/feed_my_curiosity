#FeedMyCuriosity

[FeedMyCuriosity (Live)][heroku]

[heroku]: http://www.feedmycuriosity.site/
[feedly]: https://feedly.com/i/welcome

FeedMyCuriosity is a full-stack web application designed to allow readers to have access to feeds from a variety of news websites. The idea was inspired by Feedly, and utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features and Implementation

### One Page to rule them all, one Page to find them

From logging in to reading articles to adding feeds to collections, FeedMyCuriosity does it all without having to reload the page. The application first fetches all the feed content from the feeds url in the database, and once it is loaded, the app is ready work with very little loading time in between. The content changes through user interactions through performing AJAX requests to the server, and the data is used on the frontend to dynamically update the page.

```javascript
  var CollectionApiUtil = {
    fetchCollections: function () {
      $.ajax({
        type: "GET",
        url: "api/collections",
        success: function (collections) {
          CollectionServerActions.receiveCollections(collections);
        },
        error: function (errors) {
          ErrorServerActions.receiveCollectionErrors(errors.responseJSON);
        }
      });
    }
```

### Dynamically Generated Content
  The feed urls for popular websites are stored in the database as a string. Using the gem `Feedjira`, the content from the urls are fetched and parsed into JSON, which is then passed to the frontend. This allows the articles to be up to date with the feed's website articles, so the reader is always getting the most recent content.

### Collections
  Users can have their own collections. A `Collection` is stored in the database with three columns: `id`, `name`, and `user_id`. Through a join table, a `Collection` can have many `Feeds`. These collections are rendered in the `Sidebar` and `CollectionIndex` components.

  ![image of collection index][collection-index]

  Users can add feeds to their collection through clicking "Add Feed" and selecting a collection to add to in the pop out sidebar. Adding a feed to a collection involves sending an ajax request to the `Api::CollectionsController`, which then adds an entry to the join table, `collection_feeds`, to establish the association

  ```ruby
    if !feed_to_add.empty?
      @collection.collection_feeds.create(feed_id: feed_to_add[:id])
      render :show
    elsif !feed_to_remove.empty?
      @collection.collection_feeds.where(feed_id: feed_to_remove[:id]).destroy_all
      render :show
    elsif @collection.update!(name: params[:collection][:name])
      render :show
    else
      @errors = ["There is no selected feed"]
      render "api/errors/errors", status: 404
    end
  ```

  ![image of add feed to collection][add-feed-sidebar]

  Users can also create a collection when adding a feed, and will both create the collection and add the feed in a single ActiveRecord transaction. If either one of them fails, all the actions rollback.

  ```ruby
  if params[:collection][:feed_id]
    @collection.transaction do
      @collection.save!
      @collection.collection_feeds.create!(feed_id: params[:collection][:feed_id])
    end
    render :show
  ```

  ![image of create collection sidebar][create-collection]

  ![image of create collection sidebar][create-collection-added]

  Collections are generally organized into individual `CollectionItem` components, which consist of `FeedItem` components. There are slight variations depending on where the item is being displayed (in the sidebar or in the organize page).


  [collection-index]: ./docs/screen-shots/SidebarCollectionIndex.png

  [add-feed-sidebar]: ./docs/screen-shots/AddFeedSidebar.png

  [create-collection]: ./docs/screen-shots/CreateCollection.png

  [create-collection-added]: ./docs/screen-shots/CreateCollectionAdded.png
