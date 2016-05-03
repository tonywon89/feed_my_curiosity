var React = require("react");

var FeedPopOutArticlesIndex = React.createClass({
  render: function () {
    var articles = this.props.articles;
    
    var displayedArticles = [];
    for (var i = 0; i < 5; i++) {
      displayedArticles.push((<li key={i}>{articles[i].title}</li>));
    }

    return (
      <ul>
        {displayedArticles}
      </ul>
    );
  }
});

module.exports = FeedPopOutArticlesIndex;
