var React = require("react");

var FeedStore = require("../../stores/feed_store");
var ArticleIndex = require("../articles/article_index");

var FeedDetail = React.createClass({
  render: function () {
    var feed = FeedStore.find(this.props.params.feedId);

    var content;
    if (feed) {

      content = (
        <div>
          <h1>{feed.title}</h1>
          <ArticleIndex feed={feed} />
        </div>
      );

    }

    return (
      <div class="feed-detail">
        {content}
      </div>
    );
  }
});

module.exports = FeedDetail;
