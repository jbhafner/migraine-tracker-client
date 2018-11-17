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
import Paper from "@material-ui/core/Paper";
import MyHeadacheNewForm from "./MyHeadacheNewForm";

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
  const { id, classes, myHeadaches, removeHeadache } = props;

  console.log("props", props);

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

// function mapStateToProps(state) {
//   return {
//     myHeadaches: state.headaches.myHeadaches,
//     id: state.currentUser.user.id
//   };
// }

// AS CLASS-BASED COMPONENT
// class MyHeadacheTable extends Component {
//   constructor(props) {
//     super(props);
//     console.log("props", props);
//     const { id, classes, myHeadaches } = props;
//   }

//   render() {
//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Date</TableCell>
//               <TableCell numeric>Pain Level</TableCell>
//               <TableCell numeric>Comment</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {myHeadaches.map(n => {
//               return (
//                 <TableRow key={n._id}>
//                   <TableCell numeric>{n.date}</TableCell>
//                   <TableCell numeric>{n.painLevel}</TableCell>
//                   <TableCell numeric>{n.comment}</TableCell>
//                   <TableCell numeric>
//                     <span>
//                       <button
//                         onClick={this.props.removeHeadache.bind(
//                           this,
//                           n.user._id,
//                           n._id
//                         )}
//                       >
//                         X
//                       </button>
//                     </span>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </Paper>
//     );
//   }
// }

export default withStyles(styles)(MyHeadacheTable);
// export default compose(withStyles(styles))(MyHeadacheTable);
