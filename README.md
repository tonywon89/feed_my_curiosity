#FeedMyCuriosity

[FeedMyCuriosity (Live)][heroku]

[heroku]: http://www.feedmycuriosity.site/
[feedly]: https://feedly.com/i/welcome

FeedMyCuriosity is a full-stack web application designed to allow readers to have access to feeds from a variety of news websites. The idea was inspired by Feedly, and utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features and Implementation

### One page to rule them all, one page to find them

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
