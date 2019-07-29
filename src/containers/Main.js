import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

import Paper from "@material-ui/core/Paper";
import Home from "../components/Home";
import Test from "../components/Test";
import DataView from "../components/DataView";
import AuthForm from "../components/AuthForm";
import About from "../components/About";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block"
};

const Main = props => {
  const { authUser, errors, removeError } = props;

  console.log("props", props);

  return (
    <Paper style={paperStyle}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              props.currentUser.isAuthenticated ? (
                <Redirect to="/myHeadaches/list" />
              ) : (
                <Home />
              )
            }
          />
          <Route path="/myHeadaches" render={props => <DataView />} />
          <Route exact path="/test" render={props => <Test />} />
          <Route exact path="/about" render={props => <About />} />

          <Route
            exact
            path="/signin"
            render={props => (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back!"
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join Migraine Tracker today."
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    content: state.content
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
