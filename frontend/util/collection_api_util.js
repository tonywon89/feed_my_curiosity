
var CollectionApiUtil = {
  fetchCollections: function () {
    $.ajax({
      type: "GET",
      url: "api/collections",
      success: function (collections) {
        alert("In fetchCollections success");
      },
      error: function (errors) {
        alert("In fetchCollections error");
      }
    });
  }
};

module.exports = CollectionApiUtil;
