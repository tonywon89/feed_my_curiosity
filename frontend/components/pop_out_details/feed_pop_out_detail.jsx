var React = require("react");

var FeedPopOutHeader = require("./feed_pop_out_header");

var FeedPopOutDetail = React.createClass({
  render: function () {
    return (
      <div className="feed-pop-out-detail">
        <FeedPopOutHeader feed={this.props.feed}
                          closePopOutDetail={this.props.closePopOutDetail}
                          displayAddFeed={this.props.displayAddFeed}/>
      </div>
    );
  }
});

module.exports = FeedPopOutDetail;
