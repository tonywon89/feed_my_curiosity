var React = require("react");
var classNames = require("classnames");

var PopOutDetail = React.createClass({
  render: function () {
    var popOutDetailClass = classNames({
      'pop-out-detail': true,
      'shown': this.props.isDisplayed
    });

    var popOutMainClass = classNames({
      'pop-out-main': true,
      'shown': this.props.isDisplayed
    });

    return (
      <div className={popOutMainClass}>
        <div className={popOutDetailClass}>
          This is the PopOutDetail
        </div>
      </div>
    );
  }
});

module.exports = PopOutDetail;
