var React = require("react");
var classNames = require("classnames");

var ColletionClientActions = require("../../actions/collection/collection_client_actions");

var AddFeedCollection = React.createClass({
  getInitialState: function () {
    var hasFeed = hasFeedInCollection(this.props.collection, this.props.feed);
    return { hasFeed: hasFeed };
  },

  render: function () {
    var hasFeedClass = classNames({
      'add-feed-collection': true,
      'has-feed': this.state.hasFeed
    });

    var icon;
    if (this.state.hasFeed) {
      icon = <i className="fa fa-check-square-o"></i>;
    } else {
      icon = <i className="fa fa-square-o"></i>;
    }

    return (
      <li className={hasFeedClass}>
        {icon}
        {this.props.collection.name}

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
