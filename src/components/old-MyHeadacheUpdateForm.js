import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateMyHeadache } from "../store/actions/headaches.js";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const buttonStyle = {
  margin: "5px",
  color: "blue"
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  TextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

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

class HeadacheUpdateForm extends Component<{}, HeadacheUpdateForm> {
  constructor(props) {
    super(props);
    const { authuser } = this.props;
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.handleNewHeadache}>
        <div>
          <h1>New Headache Form</h1>
          <TextField
            className="headacheInput"
            id="date"
            name="date"
            label="Headache Date"
            type="date"
            defaultValue="2020-01-01"
            onChange={this.handleChange("date")}
            InputLabelProps={{ shrink: true }}
          />
          <p> </p>
          <TextField
            id="painLevel"
            className="headacheInput"
            select
            label="Pain Level"
            value={this.state.painLevel}
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
            value={this.state.comment}
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
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentHeadache: state
  };
}

export default HeadacheUpdateForm;
