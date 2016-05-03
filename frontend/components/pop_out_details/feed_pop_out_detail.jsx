var React = require("react");

var FeedPopOutHeader = require("./feed_pop_out_header");
var FeedPopOutArticlesIndex = require("./feed_pop_out_articles_index");

var FeedPopOutDetail = React.createClass({
  render: function () {
    return (
      <div className="feed-pop-out-detail">
        <FeedPopOutHeader feed={this.props.feed}
                          closePopOutDetail={this.props.closePopOutDetail}
                          displayAddFeed={this.props.displayAddFeed}/>
        <FeedPopOutArticlesIndex entries={this.props.feed.entries}/>
      </div>
    );
  }
});

module.exports = FeedPopOutDetail;
