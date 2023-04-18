
import { Rings } from 'react-loader-spinner';
import React, { Fragment } from 'react';


import './Loading.scss';

const Loading = () => {
  return (
    <Rings
      className="loading"
      type="Circles"
      color="#00BFFF"
      height={200}
      width={100}
    />
  );
};

export default Loading;
