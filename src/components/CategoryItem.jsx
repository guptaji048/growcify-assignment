import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { Typography, makeStyles, Grid, Container, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ItemCard from './ItemCard';
import { southIndian, tshirt, beverage, grocery, fruits, vegetables } from './Data';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    padding: 12,
    boxShadow: theme.shadows[2],
  },
}));

function CategoryItem() {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [categoryDetails, setCategoryDetails] = useState(null);

  const imageSelector = () => {
    switch (location.state.name) {
      case 'South Indian':
        return southIndian;
      case `Men's Wear`:
        return tshirt;
      case 'Beverages':
        return beverage;
      case 'Grocery':
        return grocery;
      case 'Vegetables':
        return vegetables;
      case 'Fruits':
        return fruits;
      default:
        return 'foo';
    }
  }

  useEffect(() => {
    return fetch(`https://api.growcify.com/dev/product/list/${id}`)
      .then(response => response.json())
      .then(data => {
        const uniqueValues = data.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i)
        setCategoryDetails(uniqueValues);
      });
  }, [id])

  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.header}>
        <IconButton style={{ color: 'white' }} onClick={() => history.push('/')}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h4" className={classes.heading}>{location.state.name}</Typography>
      </div>
      <Grid container style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {categoryDetails && categoryDetails.map((category, idx) => (
          <ItemCard name={category.name} key={idx} index={idx} imageArr={imageSelector()} />
        ))}
        {categoryDetails && categoryDetails.length === 0 && (
          <Typography variant="h6" style={{ color: 'red', marginTop: 15 }}>Items not available</Typography>
        )}
      </Grid>
    </Container>
  );
}

export default CategoryItem;
