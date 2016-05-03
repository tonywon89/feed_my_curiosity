var React = require("react");

var ArticlePopOutDetail = React.createClass({
  render: function () {
    var entry = this.props.entry;

    return (
      <div className="article-pop-out-detail">
        <h1 className="article-pop-out-header">{entry.title}</h1>
        <h6>By {entry.author}</h6>
      </div>
    );
  }
});

module.exports = ArticlePopOutDetail;
