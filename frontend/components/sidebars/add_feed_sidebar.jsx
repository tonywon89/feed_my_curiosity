var React = require("react");

var AddFeedSidebar = React.createClass({

  render: function () {
    var content;
    debugger;
    if (this.props.isDisplayed) {
      content = (
        <div className="add-feed-main">
          <div className="add-feed-sidebar">
            This is the AddFeedSidebar
          </div>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = AddFeedSidebar;
