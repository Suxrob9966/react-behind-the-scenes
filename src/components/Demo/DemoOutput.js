import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING!');
  return <p>{props.show ? 'This is a new para!' : ''}</p>;
};

export default DemoOutput;
