import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING!');
  return <MyParagraph>{props.show ? 'This is a new para!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
