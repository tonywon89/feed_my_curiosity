var React = require("react");
var FeedIndexItemArticle = require("./feed_index_item_article");

var FeedIndexItem = React.createClass({
  render: function () {
    var feed = this.props.feed;

    return (
      <div className="feed-index-item">
        <a href={feed.url} className="feed-index-item-title">{feed.title}</a>
        <p className="feed-index-item-description">{feed.description}</p>
        <button className="feed-index-add-btn">Add Feed</button>
        <FeedIndexItemArticle entry={feed.entries[0]} />
      </div>
    );
  }
});

module.exports = FeedIndexItem;
