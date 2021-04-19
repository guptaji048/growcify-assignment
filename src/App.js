import React from "react";
import { Typography, Divider, makeStyles } from '@material-ui/core';
import CategoryList from "./components/CategoryList";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    border: '1px solid #D3D3D3',
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 12,
    boxShadow: theme.shadows[2],
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.heading}>Categories</Typography>
      </div>
      <Divider />
      <CategoryList />
    </div>
  );
}
