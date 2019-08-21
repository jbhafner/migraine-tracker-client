import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
// import MyHeadacheUpdateForm from "./MyHeadacheUpdateForm";

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
  const {
    classes,
    myHeadaches,
    removeHeadache
    // updateMyHeadache,
    // startEditing,
    // editIdx
  } = props;
  // const currentlyEditing = editIdx === i;
  console.log("props", props);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>Date</TableCell>
            <TableCell numeric>Pain Level</TableCell>
            <TableCell numeric>Comment</TableCell>
            <TableCell numeric>Delete</TableCell>
            <TableCell numeric>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myHeadaches.map(n => {
            return (
              <TableRow key={n._id}>
                <TableCell numeric>{n.date}</TableCell>
                <TableCell numeric>{n.painLevel}</TableCell>
                <TableCell numeric>{n.comment}</TableCell>
                <TableCell numeric>
                  <span>
                    <button
                      onClick={removeHeadache.bind(this, n.user._id, n._id)}
                    >
                      X
                    </button>
                  </span>
                </TableCell>
                <TableCell numeric>
                  <span>
                    <Link
                      to={{
                        pathname: "edit/",

                        state: {
                          date: n.date,
                          painLevel: n.painLevel,
                          comment: n.comment,
                          user_id: n.user._id,
                          headache_id: n._id
                        }
                      }}
                      {...this.props}
                      date={n.date}
                      updateMyHeadache={(n.user._id, n._id)}
                    >
                      Edit
                    </Link>
                    <button>Edit</button>
                  </span>
                </TableCell>
              </TableRow>
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
