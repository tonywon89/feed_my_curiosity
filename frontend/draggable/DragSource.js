var React = require("react");
var PropTypes = React.PropTypes;
var ItemTypes = require('./Constants').ItemTypes;
var DragSource = require('react-dnd').DragSource;

var feedSource = {
  beginDrag: function (props) {
    return { feedId: props.feed.id };
  }
};

var collect = function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};
