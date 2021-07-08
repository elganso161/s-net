import React, { Suspense } from "react";
import { Route } from "react-router";
import { withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { initialaizeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const Setting = React.lazy(() => import("./components/Setting/Setting"));
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    this.props.initialaizeApp();
  }

  render() {
    if (!this.props.initialaized) {
      return <Preloader />;
    }
    return (
      <div className="container">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route exact path="/">
              <ProfileContainer />
            </Route>

            <Route path="/profile/:userId?">
              <ProfileContainer />
            </Route>
            <Route path="/dialogs">
              <Suspense fallback={<Preloader />}>
                <DialogsContainer store={this.props.store} />
              </Suspense>
            </Route>
            <Route path="/news">
              <Suspense fallback={<Preloader />}>
                <News />
              </Suspense>
            </Route>
            <Route path="/music">
              <Suspense fallback={<Preloader />}>
                <Music />
              </Suspense>
            </Route>
            <Route path="/users">
              <Suspense fallback={<Preloader />}>
                <UsersContainer />
              </Suspense>
            </Route>
            <Route path="/setting">
              <Suspense fallback={<Preloader />}>
                <Setting />
              </Suspense>
            </Route>
            <Route path="/login">
              <Suspense fallback={<Preloader />}>
                <Login />
              </Suspense>
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialaized: state.app.initialaized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initialaizeApp })
)(App);
