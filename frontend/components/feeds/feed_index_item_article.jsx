var React = require("react");

var ParseHTML = require("../../mixins/parse_html_mixin");

var FeedIndexItemArticle = React.createClass({
  handlePopOutClick: function (event) {
    var popOutItem = {type: "article", content: this.props.entry};
    this.props.displayPopOutDetail(popOutItem);
  },

  render: function () {
    var entry = this.props.entry;
    var imageUrl = ParseHTML.getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    return (
      <div className="feed-index-item-article" onClick={this.handlePopOutClick}>
        <div>
          {image}
        </div>
        <h4>{entry.title}</h4>
      </div>
    );
  }
});

module.exports = FeedIndexItemArticle;
