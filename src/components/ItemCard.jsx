import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    border: '1px solid #dfdfdf',
    padding: 10,
    margin: 12,
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    }
  },
  btn: {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#007bff',
    '&:hover': {
      backgroundColor: '#007bff',
    }
  }
}));

function ItemCard({ name, index, imageArr }) {
  const classes = useStyles();
  return (
    <Grid item md={4} sm={3} className={classes.card}>
      <img style={{ display: "block", margin: "0 auto 8px", maxHeight: "230px", width: '100%' }} className="img-fluid"
        src={imageArr[index]} alt="" />
      <Typography variant="caption" style={{ color: '#55595c' }}>{name}</Typography>
      <h3 style={{ marginTop: 3, marginBottom: 3 }}>₹50</h3>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" className={classes.btn} disableRipple>Add Item</Button>
      </div>
    </Grid>
  )
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  imageArr: PropTypes.array.isRequired,
};

export default ItemCard;
