var React = require("react");
var classNames = require("classnames");

var FeedPopOutDetail = require("./feed_pop_out_detail");
var ArticlePopOutDetail = require("./article_pop_out_detail");

var PopOutDetail = React.createClass({
  handleCloseClick: function (event) {
    if (event.target === event.currentTarget) {
      this.props.closePopOutDetail();
    }
  },

  render: function () {
    var popOutDetailClass = classNames({
      'pop-out-detail': true,
      'shown': this.props.isDisplayed
    });

    var popOutMainClass = classNames({
      'pop-out-main': true,
      'shown': this.props.isDisplayed
    });

    var popOutCloseIconClass = classNames({
      'fa': true,
      'fa-times': true,
      'pop-out-close-icon': true,
      'shown': this.props.isDisplayed
    });

    var content;
    var popOutItem = this.props.popOutItem;
    if (popOutItem) {
      if (popOutItem.type === "feed") {
        content = <FeedPopOutDetail feed={popOutItem.content}
                                    closePopOutDetail={this.props.closePopOutDetail}
                                    displayAddFeed={this.props.displayAddFeed}
                                    displayPopOutDetail={this.props.displayPopOutDetail}/>;
      } else {
        content = <ArticlePopOutDetail entry={popOutItem.content}
                                       closePopOutDetail={this.props.closePopOutDetail} />;

      }
    }

    return (
      <div className={popOutMainClass} onClick={this.handleCloseClick}>
        <i className={popOutCloseIconClass} onClick={this.handleCloseClick}></i>
        <div className={popOutDetailClass}>
          {content}
        </div>
      </div>
    );
  }
});

module.exports = PopOutDetail;
