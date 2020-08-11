import React, {Component} from "react";
import {connect} from "dva"

@connect(
  (state) => ({state})
)
class IndexPage extends Component {
  login = ()=>{
    this.props.dispatch({
      type: "index/goTo",
      payload: {username: "ZZH", password: "123"}
    });
  }

  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    const {index} = this.props.state;
    console.log("props", this.props);
    return (
      <React.Fragment>
        <h2>Index Page</h2>
        <hr/>
        <p>{index.username}</p>
        <button type={"button"} onClick={this.login}>登录</button>
      </React.Fragment>
    );
  }
}

export default IndexPage;
