var React = require("react");

var FeedIndexItemArticle = React.createClass({
  render: function () {
    var entry = this.props.entry;
    var imageUrl = getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    return (
      <div className="feed-index-item-article">
        {image}
        <h4>{entry.title}</h4>
      </div>
    );
  }
});

var getImageUrl = function (entry) {
  var imgRegex = /src="([^"]+)"/;
  var imageUrl;

  if (entry.summary) {
    imageUrl = entry.summary.match(imgRegex);

    if (imageUrl) {
      imageUrl = imageUrl[1];
    } else {
      if (entry.content) {
        imageUrl = entry.content.match(imgRegex);

        if (imageUrl) {
          imageUrl = imageUrl[1];
        }
      }
    }
  }

  return imageUrl;
};

module.exports = FeedIndexItemArticle;
