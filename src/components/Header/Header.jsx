import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actLogout } from 'containers/shared/Auth/module/actions';
class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand col-2" to="/">
          <img src={"https://cdn-icons-png.flaticon.com/512/80/80812.png"} alt="none" width="70px" height="50px" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse col-10" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 col-4">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/review">
                Review
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hoc">
                Review
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {this.props.currentUser ? (
              <li className="nav-item" onClick={this.handleLogout}>
                <a className="nav-link">Logout</a>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
