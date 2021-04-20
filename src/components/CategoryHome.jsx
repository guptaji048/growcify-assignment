import React from "react";
import { Typography, Divider, makeStyles, Container } from '@material-ui/core';
import CategoryList from "./CategoryList";

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #D3D3D3',
    borderRadius: 5,
    padding: 0,
  },
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 12,
    boxShadow: theme.shadows[2],
  },
}));

export default function CategoryHome() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.heading}>Categories</Typography>
      </div>
      <Divider />
      <CategoryList />
    </Container>
  );
}
