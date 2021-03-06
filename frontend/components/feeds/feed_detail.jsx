var React = require("react");
var hashHistory= require("react-router").hashHistory;

var FeedStore = require("../../stores/feed_store");
var ArticleIndex = require("../articles/article_index");

var FeedDetail = React.createClass({

  componentWillMount: function () {
    if (!this.props.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillReceiveProps: function (newProps) {
    if (!newProps.currentUser) {
      hashHistory.push("/");
    }
  },
  render: function () {
    var feedId = this.props.feed ? this.props.feed.id : this.props.params.feedId;
    var feed = FeedStore.find(feedId);
    var content;
    if (feed) {
      content = (
        <div className="feed-detail">
          <div className="feed-detail-info">
            <h1><a href={feed.url}>{feed.title}</a></h1>
            <a href={feed.url} className="article-url">Visit Website</a>
          </div>
          <ArticleIndex feed={feed} displayPopOutDetail={this.props.displayPopOutDetail} />
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
