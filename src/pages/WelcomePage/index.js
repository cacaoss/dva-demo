import React, {Component} from 'react';
import {connect} from "dva";

@connect(
  (state) => ({state})
)
class WelcomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Welcome Page</h2>
        <hr/>
      </React.Fragment>
    );
  }
}

export default WelcomePage;
