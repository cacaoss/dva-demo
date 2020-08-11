import React, {Component} from 'react';
import {connect} from "dva";

@connect(
  (state) => ({state})
)
class LogInPage extends Component {
  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <h2>LogIn Page</h2>
        <hr/>
      </React.Fragment>
    );
  }
}

export default LogInPage;
