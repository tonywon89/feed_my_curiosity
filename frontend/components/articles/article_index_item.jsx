var React = require("react");

var ParseHTML = require("../../mixins/parse_html_mixin");

var ArticleIndexItem = React.createClass({
  getInitialState: function () {
    return { isSaved: false};
  },

  handlePopOutClick: function (event) {
    var popOutItem = {type: "article", content: this.props.entry};
    this.props.displayPopOutDetail(popOutItem);
  },

  handleSaveClick: function (event) {
    alert("Hello");
  },

  render: function () {
    var entry = this.props.entry;
    var imageUrl = ParseHTML.getImageUrl(entry);

    var image;
    image = imageUrl ? <img src={imageUrl} /> : <img src="http://dummyimage.com/600x400/46b0a4/414582.png&text=Curiously,+there+is+no+image" />;

    var content = ParseHTML.getContent(entry);

    var saveBtn;
    if (this.state.isSaved) {
      saveBtn = <div className="unsave-btn" onClick={this.handleSaveClick}>Unsave</div>;
    } else {
      saveBtn = <div className="save-btn" onClick={this.handleSaveClick}>Save</div>;
    }

    return (
      <div className="article-index-item" >
        <div className="article-details" onClick={this.handlePopOutClick}>
          <div className="image-wrapper">
            {image}
          </div>
          <div className="header-wrapper">
            <h4>{entry.title}</h4>
          </div>
          <div className="wrapper">
            <p className="article-content">{content}</p>
          </div>
        </div>
        {saveBtn}
      </div>
    );
  }
});

module.exports = ArticleIndexItem;
