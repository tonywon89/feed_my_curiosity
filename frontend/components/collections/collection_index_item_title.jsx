var React = require("react");

var CollectionIndexItemTitle = React.createClass({
  render: function () {
    return (
      <div className="collection-item-title">
        <h2>{this.props.title}</h2>
        <div className="edit-icons">
          <i className="fa fa-pencil pencil"></i>
          <i className="fa fa-times times"></i>
        </div>
      </div>
    );
  }
});

module.exports = CollectionIndexItemTitle;
