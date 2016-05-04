var React = require("react");
var FeedIndexItemArticle = require("./feed_index_item_article");

var FeedIndexItem = React.createClass({
  handleAddClick: function (event) {
    event.preventDefault();
    this.props.displayAddFeed(event.target.value);
  },

  handlePopOutClick: function (event) {
    var popOutItem = {type: "feed", content: this.props.feed};
    this.props.displayPopOutDetail(popOutItem);
  },

  render: function () {
    var feed = this.props.feed;

    return (
      <div className="feed-index-item">
        <a className="feed-index-item-title" onClick={this.handlePopOutClick}>{feed.title}</a>
        <p className="feed-index-item-description" onClick={this.handlePopOutClick}>{feed.description}</p>
        <div className="feed-index-item-btns">
          <button onClick={this.handleAddClick} value={feed.id} className="feed-index-add-btn">Add Feed</button>
          <button onClick={this.handlePopOutClick} className="feed-index-detail-btn">Details</button>
        </div>
        <FeedIndexItemArticle entry={feed.entries[0]} displayPopOutDetail={this.props.displayPopOutDetail} />
      </div>
    );
  }
});

module.exports = FeedIndexItem;
