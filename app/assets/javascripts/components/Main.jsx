import React from 'react';
import * as hypernova from 'hypernova-react';

class Main extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

export default hypernova.renderReact('Main', Main);
