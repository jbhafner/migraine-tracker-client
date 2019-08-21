import React, { Component } from "react";
import { connect } from "react-redux";
// import { Router, browserHistory } from "react-router";
import { withRouter } from "react-router-dom";
import {
  postNewHeadache,
  updateMyHeadache
} from "../store/actions/headaches.js";
// import { withStyles } from "@material-ui/core/styles";
// import { DateFormatInput, TimeFormatInput } from "material-ui-next-pickers";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import "./MyHeadacheNewForm.css";
// import { format, parse } from "date-fns";

// console.log("postNewHeadache", postNewHeadache);

const buttonStyle = {
  margin: "5px",
  color: "blue"
};

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200
//   }
// });

const pain = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 5,
    label: "5"
  },
  {
    value: 6,
    label: "6"
  },
  {
    value: 7,
    label: "7"
  },
  {
    value: 8,
    label: "8"
  },
  {
    value: 9,
    label: "9"
  },
  {
    value: 10,
    label: "10"
  }
];

// pain.map(function(item) {
//   console.log("pain item", item);
// });

// let date = {};
class NewHeadacheForm extends Component<{}, NewHeadacheForm> {
  constructor(props) {
    super(props);
    // const { authUser } = this.props;
    // const {
    //   date,
    //   painLevel,
    //   comment,
    //   user_id,
    //   headache_id
    // } = this.props.location.state;
    this.state = {
      date: "",
      painLevel: 0,
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleNewHeadache = this.handleNewHeadache.bind(this);
    // this.onChangeDate = this.onChangeDate.bind(this);
    // this.postNewHeadache = this.postNewHeadache.bind(this);
    console.log("props", props);
    console.log("this.state", this.state);
    console.log("this.props", this.props);
    console.log("updateMyHeadache", updateMyHeadache);
  }

  componentDidMount() {
    const {
      date,
      painLevel,
      comment,
      user_id,
      headache_id
    } = this.props.location.state;
    console.log(
      "date,painLevel,comment,user_id, headache_id",
      date,
      painLevel,
      comment,
      user_id,
      headache_id
    );
  }
  handleChange = prop => event => {
    console.log("prop", prop, "event.target.value", event.target.value);
    this.setState({ [prop]: event.target.value });
    // console.log("this.state", this.state);
  };

  // onChangeDate = (event, date) => {
  //   console.log("Date:", date);
  //   this.setState({ selectedDate: date, dateText: format(date, "MM/DD/YYYY") });
  // };

  handleUpdateHeadache = event => {
    const {
      // date,
      // painLevel,
      // comment,
      user_id,
      headache_id
    } = this.props.location.state;
    console.log("user_id", user_id, "headache_id", headache_id);
    console.log("this.props.location.state", this.props.location.state);
    console.log("event", event);
    console.log("handleUpdateHeadach / this.state", this.state);
    console.log("updateMyHeadache", updateMyHeadache);
    console.log("this.state", { ...this.state });

    event.preventDefault();
    updateMyHeadache(user_id, headache_id, { ...this.state });
    this.props.history.push("/myHeadaches/list");
  };

  handleSubmit(e) {
    console.log("AuthForm.js this.props", this.props);
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    console.log("MyHeadacheNewForm - authType", authType);
    console.log("MyHeadacheNewForm - this.props", this.props);
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/myHeadaches/list");
      })
      .catch(() => {
        return;
      });
  }

  render() {
    return (
      <form onSubmit={this.handleUpdateHeadache}>
        <div>
          <h1>Update Headache Form</h1>
          <TextField
            className="headacheInput"
            id="date"
            name="date"
            label="Headache Date"
            type="date"
            value={this.props.location.state.date}
            onChange={this.handleChange("date")}
            InputLabelProps={{ shrink: true }}
          />
          <p> </p>
          <TextField
            id="painLevel"
            className="headacheInput"
            select
            label="Pain Level"
            value={this.props.location.state.painLevel}
            onChange={this.handleChange("painLevel")}
          >
            {pain.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <p> </p>
          <TextField
            id="name"
            className="headacheInput"
            label="Comment"
            value={this.props.location.state.comment}
            onChange={this.handleChange("comment")}
            type="text"
            name="comment"
          />
        </div>
        <div>
          <Button
            variant="outlined"
            label="Submit"
            style={buttonStyle}
            type="submit"
          >
            Update
          </Button>
        </div>
      </form>
    );
  }
}

// interface NewHeadacheForm {
//   date: Date;
// }

function mapStateToProps(state) {
  return {
    errors: state.errors,
    newHeadache: state
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { postNewHeadache, updateMyHeadache }
  )(NewHeadacheForm)
);
