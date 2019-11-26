import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/login.scss";

class Login extends Component {
  constructor() {
    this.state = {
      active: 0,
      submitedLogin: false,
      fname: "",
      lname: "",
      mobile: "",
      email: "",
      password: "",
      submitedSignup: false
    };
    this.btnPress = this.btnPress.bind(this);
  }

  render() {
    let active = this.state.active;
    const {
      email,
      password,
      submitedLogin,
      submitedSignup,
      fname,
      lname,
      mobile
    } = this.state;

    return (
      <React.Fragment>
        <div className="login-wrp row m-0 align-items-center">
          <div className="login-inner bg-white mx-auto">
            <ul className="login-list row m-0 p-0 text-center">
              <li
                className={`col-6 ${active == 0 ? "active" : ""}`}
                onClick={this.btnPress(0)}
              >
                Login
              </li>
              <li
                className={`col-6 ${active == 1 ? "active" : ""}`}
                onClick={this.btnPress(1)}
              >
                Signup
              </li>
            </ul>
            {/* Login form start */}
            <div className={`box-widget ${active == 0 ? "active" : ""}`}>
              <form onSubmit={this.handleLogin}>
                <div className="form-group form-group--1 ">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className={`form-control ${
                      submitedLogin && !email ? "is-invalid" : ""
                    }`}
                    value={email}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">Email is required</div>
                </div>
                <div className="form-group form-group--1">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      submitedLogin && !password ? "is-invalid" : ""
                    }`}
                    value={password}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">Password is required</div>
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary btn-md w-100">
                    Login
                  </button>
                </div>
                <p className="desc">
                  Don't remember your password ?{" "}
                  <Link to="/reset">Reset Password</Link>
                </p>
                <h5>Log In with Another Account</h5>

                <div className="loginWithSocial row">
                  <div className="col">
                    <button className="facebook">
                      <i className="fa fa-facebook" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="twitter">
                      <i className="fa fa-twitter" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="linkedin">
                      <i className="fa fa-linkedin" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="google">
                      <i className="fa fa-google" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="github">
                      <i className="fa fa-github" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Signup form start */}
            <div className={`box-widget ${active == 1 ? "active" : ""}`}>
              <form onSubmit={this.handleSignup}>
                <div className="form-group form-group--1 ">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="fname"
                    className={`form-control ${
                      submitedSignup && !fname ? "is-invalid" : ""
                    }`}
                    value={fname}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">First Name is required</div>
                </div>
                <div className="form-group form-group--1 ">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    className={`form-control ${
                      submitedSignup && !lname ? "is-invalid" : ""
                    }`}
                    value={lname}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">Last Name is required</div>
                </div>
                <div className="form-group form-group--1 ">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className={`form-control ${
                      submitedSignup && !email ? "is-invalid" : ""
                    }`}
                    value={email}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">Email is required</div>
                </div>
                <div className="form-group form-group--1 ">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="mobile"
                    className={`form-control ${
                      submitedSignup && !mobile ? "is-invalid" : ""
                    }`}
                    value={mobile}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">
                    Phone Number is required
                  </div>
                </div>

                <div className="form-group form-group--1">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      submitedSignup && !password ? "is-invalid" : ""
                    }`}
                    value={password}
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">Password is required</div>
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary btn-md w-100">
                    Signup
                  </button>
                </div>
                <h5>Signup with Another Account</h5>

                <div className="loginWithSocial row">
                  <div className="col">
                    <button className="facebook">
                      <i className="fa fa-facebook" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="twitter">
                      <i className="fa fa-twitter" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="linkedin">
                      <i className="fa fa-linkedin" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="google">
                      <i className="fa fa-google" />
                    </button>
                  </div>
                  <div className="col">
                    <button className="github">
                      <i className="fa fa-github" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  btnPress = param => e => {
    this.setState({
      active: param,
      submitedLogin: false,
      submitedSignup: false
    });
  };

  handleLogin = event => {
    event.preventDefault();
    this.setState({
      submitedLogin: true
    });
  };

  // Change event of email
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Signup Actions
  handleSignup = event => {
    event.preventDefault();
    this.setState({
      submitedSignup: true
    });
  };
}

export default Login;
