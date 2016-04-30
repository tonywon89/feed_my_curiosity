var React = require("react");

var CollectionFeedItem = React.createClass({
  render: function () {
    return (
      <div className="collection-feed-item">
        {this.props.feed.name}
        <div className="edit-icons">
          <i className="fa fa-pencil pencil"></i>
          <i className="fa fa-times times"></i>
        </div>
      </div>
    );
  }
});

module.exports = CollectionFeedItem;
