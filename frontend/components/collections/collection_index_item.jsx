var React = require("react");

var CollectionIndexItem = React.createClass({
  render: function () {
    return (
      <div className="collection-index-item">
        <h1 className="collection-item-title">{this.props.collection.name}</h1>
      </div>
    );
  }
});

module.exports = CollectionIndexItem;
