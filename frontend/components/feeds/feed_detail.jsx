var React = require("react");

var FeedStore = require("../../stores/feed_store");
var ArticleIndex = require("../articles/article_index");

var FeedDetail = React.createClass({
  render: function () {
    var feedId = this.props.feed ? this.props.feed.id : this.props.params.feedId;
    var feed = FeedStore.find(feedId);

    var content;
    if (feed) {

      content = (
        <div className="feed-detail">
          <h1><a>{feed.title}</a></h1>
          <ArticleIndex feed={feed} />
        </div>
      );

    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = FeedDetail;
