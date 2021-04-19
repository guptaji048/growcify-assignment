import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import categoryPhotosArr from './Data';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      background: 'linear-gradient(to right, #58a4f5, #449af9, #3091fc, #1986fe, #007bff)',
      color: 'white',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    }
  }
}));

function CategoryList() {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch('https://api.growcify.com/dev/category/list')
      .then(response => response.json())
      .then(data => {
        const temp = data.filter((cate) => cate.parent ? null : cate)
        setCategoryList(temp);
      });
  }, [])
  return (
    <List className={classes.root}>
      {categoryList && categoryList.map((category, idx) => (
        <React.Fragment>
          <ListItem alignItems="center" key={idx} className={classes.listItem}>
            <ListItemAvatar>
              <Avatar variant="rounded" alt="Category Items" src={categoryPhotosArr[idx]} />
            </ListItemAvatar>
            <ListItemText
              primary={category.name}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <ChevronRightIcon style={{ color: 'white' }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  )
}

export default CategoryList;
