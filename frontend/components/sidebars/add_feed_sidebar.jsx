var React = require("react");
var classNames = require("classnames");

var FeedStore = require("../../stores/feed_store");
var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var UserStore = require("../../stores/user_store");

var AddFeedSidebar = React.createClass({
  getInitialState: function () {
    return { collections: CollectionStore.all() };
  },

  componentDidMount: function () {
    this.collectionListener = CollectionStore.addListener(this._onCollectionChange);
    this.userListener = UserStore.addListener(this._onUserChange);
    CollectionClientActions.fetchCollections();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.collectionListener.remove();
  },

  _onUserChange: function () {
    CollectionClientActions.fetchCollections();
  },

  _onCollectionChange: function () {
    this.setState({ collections: CollectionStore.all() });
  },

  handleCloseClick: function (event) {
      event.preventDefault();
      this.props.closeAddFeed();
  },

  render: function () {
    var content;
    var feed = FeedStore.find(this.props.toAddFeedId);

    var feedTitle;
    if (feed) {
      feedTitle = <h3>{feed.title}</h3>;
    }
    var collections = this.state.collections.map(function(collection) {
      return <p key={collection.id}>{collection.name}</p>;
    });

    var addFeedSidebarClass = classNames({
      'add-feed-sidebar': true,
      'shown': this.props.isDisplayed
    });

    var addFeedSidebarOverlayClass = classNames({
        'add-feed-main': true,
        'shown': this.props.isDisplayed
      });

    return (
      <div>
        <div className={addFeedSidebarOverlayClass}>
          <div className={addFeedSidebarClass}>
            {feedTitle}
            {collections}
            <button onClick={this.handleCloseClick}>Close</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AddFeedSidebar;
