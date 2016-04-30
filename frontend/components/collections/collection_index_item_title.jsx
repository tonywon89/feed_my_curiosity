var React = require("react");
var hashHistory = require("react-router").hashHistory;

var CollectionIndexItemTitle = React.createClass({
  redirectToCollectionDetail: function () {
    hashHistory.push("/collections/" + this.props.collection.id.toString());
  },

  render: function () {
    return (
      <div className="collection-item-title">
        <h2 onClick={this.redirectToCollectionDetail}>{this.props.collection.name}</h2>
        <div className="edit-icons">
          <i className="fa fa-pencil pencil" onClick={this.props.openEditModal}></i>
          <i className="fa fa-times times" onClick={this.props.openDeleteModal}></i>
        </div>
      </div>
    );
  }
});

module.exports = CollectionIndexItemTitle;
