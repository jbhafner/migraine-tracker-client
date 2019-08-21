import React, { Component } from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import "./DataView.css";
import MyHeadacheList from "./MyHeadacheList";
import MyHeadacheNewForm from "./MyHeadacheNewForm";
import About from "./About";
import { authUser } from "../store/actions/auth";
import {
  fetchHeadaches,
  removeHeadache,
  updateMyHeadache
} from "../store/actions/headaches.js";
import MyHeadacheUpdateForm from "./MyHeadacheUpdateForm";
// import { getAllHeadaches } from "../store/actionCreators.js";

const style = {
  margin: "5px",
  color: "blue"
};

class DataView extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.updateHeadaches = this.updateHeadaches.bind(this);
  }

  componentDidMount() {
    let id = this.props.id;
    console.log("id", id);
    console.log("this.props.fetchHeadaches", this.props.fetchHeadaches);
    // this.props.fetchHeadaches(id);
    this.props.fetchHeadaches(id);
  }

  // componentWillUpdate() {
  //   let id = this.props.id;
  //   console.log("id", id);
  //   console.log("this.props.fetchHeadaches", this.props.fetchHeadaches);
  //   // this.props.fetchHeadaches(id);
  //   this.props.fetchHeadaches(id);
  // }

  removeHeadache(id) {
    console.log("removeHeadache called");
    this.props.removeHeadache(id);
  }

  updateMyHeadache(id) {
    console.log("updateMyHeadache called");
    this.props.updateMyHeadache(id);
  }

  async updateHeadaches(user_id) {
    console.log("updateHeadaches called");
    console.log("this.props.fetchHeadaches", this.props.fetchHeadaches);
    await this.props.fetchHeadaches();
  }

  startEditing(id) {}

  editIdx(id) {}

  stopEditing(id) {}

  render() {
    return (
      <div className="HeadacheView">
        <div className="listButtons">
          <Button
            component={Link}
            to="/myHeadaches/list"
            variant="outlined"
            style={style}
            onClick={function() {
              console.log("Headache List clicked");
            }}
          >
            Headache List
          </Button>
          <Button
            component={Link}
            to="/myHeadaches/new"
            variant="outlined"
            style={style}
          >
            New Headache
          </Button>
          <Button
            component={Link}
            to="/myHeadaches/about"
            variant="outlined"
            style={style}
          >
            About
          </Button>
        </div>

        <div>
          <Switch>
            <Route
              exact
              path="/myHeadaches/list"
              component={props => (
                <MyHeadacheList
                  id={this.props.id}
                  {...props}
                  key={this.props.myHeadaches._id}
                  myHeadaches={this.props.myHeadaches}
                  fetchHeadaches={this.props.fetchHeadaches}
                  updateMyHeadache={this.props.updateMyHeadache}
                  removeHeadache={this.props.removeHeadache}
                />
              )}
            />
            <Route
              exact
              path="/myHeadaches/new"
              render={props => <MyHeadacheNewForm onAuth={authUser} />}
              history={this.props.history}
            />
            <Route
              path="/myHeadaches/edit"
              render={props => <MyHeadacheUpdateForm onAuth={authUser} />}
              history={this.props.history}
            />
            <Route
              exact
              path="/myHeadaches/about"
              render={props => <About onAuth={authUser} />}
              history={this.props.history}
            />
            <Route render={() => <h1>Page not Found</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myHeadaches: state.headaches.myHeadaches,
    id: state.currentUser.user.id
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, fetchHeadaches, removeHeadache, updateMyHeadache }
  )(DataView)
);
