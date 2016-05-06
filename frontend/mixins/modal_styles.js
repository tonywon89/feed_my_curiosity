var ModalStyles = {
  authModalStyle: {
    overlay: {
      position        : 'fixed',
      top             : 0,
      left            : 0,
      right           : 0,
      bottom          : 0,
      backgroundColor : 'rgba(100, 123, 124, 0.5)',
      zIndex          : 10
    },
    content: {
      position        : 'fixed',
      top             : '50px',
      left            : '150px',
      right           : '150px',
      bottom          : '100px',
      border          : '1px solid #ccc',
      borderRadius    : '20px',
      padding         : '20px',
      height          : '400px',
      width           : '400px',
      margin          : '0 auto',
      zIndex          :  11
    }
  }
};

module.exports = ModalStyles;
