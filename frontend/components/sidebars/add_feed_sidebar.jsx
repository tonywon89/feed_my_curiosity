var React = require("react");
var classNames = require("classnames");

var FeedStore = require("../../stores/feed_store");
var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var UserStore = require("../../stores/user_store");

var AddFeedCollection = require("./add_feed_collection");

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
    if (event.target === event.currentTarget) {
      this.props.closeAddFeed();
    }
  },

  render: function () {
    var content;
    var feed = FeedStore.find(this.props.toAddFeedId);

    var feedTitle, collections;
    if (feed) {
      feedTitle = <h1>{feed.title}</h1>;
      collections = this.state.collections.map(function(collection) {
        return <AddFeedCollection key={collection.id} collection={collection} feed={feed} />;
      });
    }



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
        <div className={addFeedSidebarOverlayClass} onClick={this.handleCloseClick}>
          <div className={addFeedSidebarClass}>
            <i className="fa fa-times close-icon" onClick={this.handleCloseClick}></i>
            <span>Select a new collection to add this site to your curious feed.</span>
            {feedTitle}
            <ul>{collections}</ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AddFeedSidebar;
