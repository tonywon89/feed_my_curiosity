var React = require("react");

var CollectionIndexItem = React.createClass({
  render: function () {
    return (
      <div className="collection-index-item">
        <h1 className="collection-item-title">
          <h2>{this.props.collection.name}</h2>
          <div className="edit-icons">
            <i className="fa fa-pencil pencil"></i>
            <i className="fa fa-times times"></i>
          </div>
        </h1>
      </div>
    );
  }
});

module.exports = CollectionIndexItem;
