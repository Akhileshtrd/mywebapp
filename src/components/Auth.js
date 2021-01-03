import React, { Component } from "react";

class Auth extends Component {
  login() {
    console.warn("state", this.state);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            style={{ borderRadius: "5px", borderStyle: "double" }}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            style={{ borderRadius: "5px", borderStyle: "double" }}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <button onClick={() => this.login()}>Login</button>
        </div>
      </div>
    );
  }
}

export default Auth;
