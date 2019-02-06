import React, { Component } from "react";
import { Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableHead from '@material-ui/core/TableHead';
import TableRowColumn from "@material-ui/core/TableRowColumn";
import Paper from "@material-ui/core/Paper";
import MyHeadacheNewForm from "./MyHeadacheNewForm";
import HeadacheUpdateForm from "./MyHeadacheUpdateForm";
// import EditIcon from "material-ui/svg-icons/image/edit";
// import TrashIcon from "material-ui/svg-icons/actions/delete";
import CheckIcon from "material-ui/svg-icons/navigation/check";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 400
  }
});

console.log("this.props", this.props);
const MyHeadacheTable = props => {
  const { id, classes, myHeadaches, removeHeadache, updateMyHeadache } = props;

  console.log("props", props);
  console.log("currentlyEditing", currentlyEditing)

  const row = (x,i,header, removeHeadache, startEditing, editIndex, handleChange) => {
    const currentlyEditing = editIndex === n;
     return (
       <React.Fragment>
         <TableHead>
          <TableRow key={n._id}> 
              {myHeadaches.map((n,k) => ( 
                <TableCell key={n._id}>
                    {currentlyEditing ? (
                      <TextField numeric name={n.prop} onChange={handleChange} value={x[n.prop]}></TextField>          
                  ) : (
                      test 
                  )}
                </TableCell>
                <TableCell>
                  <span>
                      currentlyEditing ? 
                      <CheckIcon onClick={()=> stopEditing()}/> :
                    <button
                      onClick={startEditing}
                    >
                      edit
                    </button>
                  </span>
              </TableCell>
              <TableCell numeric>
                <span>
                  <button
                    onClick={removeHeadache.bind(this, n.user._id, n._id)}
                  >
                    X
                  </button>
                </span>
              </TableCell>
              )
          </TableRow>
       </TableHead>
       </React.Fragment>
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>Date</TableCell>
            <TableCell numeric>Pain Level</TableCell>
            <TableCell numeric>Comment</TableCell>
            <TableCell numeric>Edit</TableCell>
            <TableCell numeric>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

MyHeadacheTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyHeadacheTable);
// export default compose(withStyles(styles))(MyHeadacheTable);
