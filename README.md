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
  Users can have their own collections. A `Collection` is stored in the database with three columns: `id`, `name`, and `user_id`. Through a join table, `collection_feeds`, a `Collection` can have many `Feeds`. These collections are rendered in the `Sidebar` and `CollectionIndex` components.
