var React = require("react");
var FeedIndexItemArticle = require("./feed_index_item_article");

var FeedIndexItem = React.createClass({
  handleAddClick: function (event) {
    event.preventDefault();
    this.props.displayAddFeed(event.target.value);
  },

  handlePopOutClick: function (event) {
    this.props.displayPopOutDetail(this.props.feed);
  },

  render: function () {
    var feed = this.props.feed;

    return (
      <div className="feed-index-item">
        <a href={feed.url} className="feed-index-item-title" onClick={this.handlePopOutClick}>{feed.title}</a>
        <p className="feed-index-item-description" onClick={this.handlePopOutClick}>{feed.description}</p>
        <button onClick={this.handleAddClick} value={feed.id} className="feed-index-add-btn">Add Feed</button>
        <FeedIndexItemArticle entry={feed.entries[0]} />
      </div>
    );
  }
});

module.exports = FeedIndexItem;
