var React = require("react");
var Link = require("react-router").Link;
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");
var UserStore = require("../../stores/user_store");
var SidebarCollectionIndexItem = require("./sidebar_collection_index_item");

var SidebarCollectionIndex = React.createClass({
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

  _toFeeds: function () {
    hashHistory.push("/feeds");
  },

  render: function () {
    var collections;
    if (this.state.collections.length !== 0) {
      collections = this.state.collections.map(function(collection) {
        return <SidebarCollectionIndexItem key={collection.id} collection={collection} />;
      });
    } else {
      collections = <div className="sidebar-organize-btn"
                       onClick={this._toFeeds}>
                      You have no collections. <br />
                      Click here to get some!
                    </div>;
    }
    return (
      <div className="sidebar-collection-index">
        {collections}
      </div>
    );
  }
});

module.exports = SidebarCollectionIndex;
