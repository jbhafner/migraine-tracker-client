import React, { Component } from "react";
import MyHeadacheTable from "./MyHeadacheTable";

class MyHeadacheList extends Component {
  constructor(props) {
    super(props);
    let self = this;
    console.log("self", self);
    // this.updateHeadaches = this.updateHeadaches.bind(this);
    // this.deleteHeadache = this.deleteHeadache.bind(this);
    console.log("this.props", this.props, "this.props.id", this.props.id);
  }

  componentWillUpdate() {
    let id = this.props.id;
    // this.updateHeadaches(id);
    this.props.fetchHeadaches(id);
  }

  componentDidMount() {
    console.log("MyHeadacheList.js/componentDidMount - this.props", this.props);
  }

  handleAdd(val) {
    this.props.postNewHeadache(val);
  }

  deleteHeadache(user_id, headache_id) {
    console.log(
      "removeHeadache called / user_id:",
      user_id,
      "headache_id:",
      headache_id
    );
    this.props.removeHeadache(user_id, headache_id);
  }

  // async updateHeadaches() {
  //   console.log("updateHeadaches called");
  //   let headacheArray = await [];
  //   await this.props.getAllHeadaches();
  // }

  render() {
    console.log(
      "MyHeadacheList.js/render - this.props.myHeadaches",
      this.props.myHeadaches,
      "isArr?",
      Array.isArray(this.props.myHeadaches)
    );
    // const {headaches} = this.props;
    console.log("this.props.myHeadaches", this.props.myHeadaches);
    let myHeadacheTable = (
      <MyHeadacheTable
        myHeadaches={this.props.myHeadaches}
        updateMyHeadache={this.props.updateMyHeadache}
        removeHeadache={this.props.removeHeadache}
        {...this.props}
      />
    );

    console.log(
      "myHeadacheTable",
      myHeadacheTable,
      "isArray?",
      Array.isArray(this.props.myHeadaches)
    );

    return (
      <div className="MyHeadacheList">
        <h1>My Headache List</h1>
        {myHeadacheTable}
      </div>
    );
  }
}
console.log("MyHeadacheList", MyHeadacheList);
export default MyHeadacheList;
// function mapStateToProps(state) {
//   return {
//     myHeadaches: state.headaches.myHeadaches,
//     id: state.currentUser.user.id
//   };
// }
// export default connect(
//   mapStateToProps,
//   { fetchHeadaches, removeHeadache, getAllHeadaches }
// )(MyHeadacheList);
