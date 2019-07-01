import React from 'react';

import {history} from '../history';
import {Entries, Humidity, SDSP1, SDSP2, Temperature} from '../pages';

const getPage = (pageName: string) => {
  switch (pageName) {
    case 'temperature': {
      return <Temperature></Temperature>;
    }
    case 'humidity': {
      return <Humidity></Humidity>;
    }
    case 'sds_p1': {
      return <SDSP1></SDSP1>;
    }
    case 'sds_p2': {
      return <SDSP2></SDSP2>;
    }
    case 'entries': {
      return <Entries></Entries>;
    }
    default: {
      return <div></div>;
    }
  }
};

const Content = () => {
  const page = history.location.pathname.replace('/', '');

  return <div>{getPage(page)}</div>;
};

export default Content;
