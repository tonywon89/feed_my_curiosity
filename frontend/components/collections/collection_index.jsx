var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionStore = require("../../stores/collection_store");
var CollectionClientActions = require("../../actions/collection/collection_client_actions");

var CollectionIndex = React.createClass({
  getInitialState: function () {
    return { collections: CollectionStore.all() };
  },

  componentDidMount: function () {
    this.listener = CollectionStore.addListener(this._onChange);
    CollectionClientActions.fetchCollections();
  },

  componentWillMount: function () {
    if (!this.props.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillReceiveProps: function (newProps) {
    if (!newProps.currentUser) {
      hashHistory.push("/");
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ collections: CollectionStore.all() });
  },

  redirectToHome: function () {
    hashHistory.push("/");
  },

  render: function () {
    var content;
    var currentUser = this.props.currentUser;

    if (currentUser) {
      content = <h1>{currentUser.email}'s Collection</h1>;
    }

    return (
      <div className="collection-index">
       {content}
      </div>
    );
  }

});

module.exports = CollectionIndex;
