import React from "react";

const WhiteSpace = ({ width, height }) => {
  return <div style={{ width, height }}></div>;
};

WhiteSpace.defaultProps = {
  height: 20,
  width: 0,
};

export default WhiteSpace;
