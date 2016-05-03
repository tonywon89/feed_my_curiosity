var React = require("react");

var ArticlePopOutDetail = React.createClass({
  render: function () {
    return (
      <div>{this.props.entry.title}</div>
    );
  }
});

module.exports = ArticlePopOutDetail;
