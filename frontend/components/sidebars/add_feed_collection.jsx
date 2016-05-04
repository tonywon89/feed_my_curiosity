var React = require("react");
var classNames = require("classnames");

var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var AddFeedCollection = React.createClass({
  getInitialState: function () {
    var hasFeed = hasFeedInCollection(this.props.collection, this.props.feed);
    return { hasFeed: hasFeed };
  },

  handleClick: function (event) {
    var collection = this.props.collection;
    if (this.state.hasFeed) {
      collection.add = "";
      collection.remove = this.props.feed;
      CollectionClientActions.updateCollection(collection);
      this.setState({ hasFeed : false });
    } else {
      collection.add = this.props.feed;
      collection.remove = "";
      CollectionClientActions.updateCollection(collection);
      this.setState({ hasFeed : true });
    }
  },

  render: function () {
    var hasFeedClass = classNames({
      'add-feed-collection': true,
      'has-feed': this.state.hasFeed
    });

    var icon, addedTag;
    if (this.state.hasFeed) {
      icon = <i className="fa fa-check-square-o check-icon"></i>;
      addedTag = <p>Added</p>;
    } else {
      icon = <i className="fa fa-square-o checkbox-icon"></i>;
    }

    return (
      <li className={hasFeedClass} onClick={this.handleClick}>
        <div>
          {icon}
          {this.props.collection.name}
        </div>
        {addedTag}

      </li>
    );
  }
});

var hasFeedInCollection = function (collection, feed) {
  for (var i = 0; i < collection.feeds.length; i++) {
    if (collection.feeds[i].id === feed.id) return true;
  }

  return false;
};

module.exports = AddFeedCollection;
