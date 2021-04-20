import React, { useContext } from 'react';
import { useHistory, generatePath } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { categoryPhotosArr } from './Data';
import { CategoryContext } from "../contexts/CategoryContext";

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
  const history = useHistory();
  const { categoryList } = useContext(CategoryContext);

  const handleProceed = (e, id, name) => {
    e.preventDefault();
    history.push({
      pathname: generatePath("/category/:id", { id }),
      state: { name },
    });
  }

  return (
    <List className={classes.root}>
      {categoryList && categoryList.map((category, idx) => (
        <React.Fragment key={idx}>
          <ListItem alignItems="center" key={idx} className={classes.listItem} onClick={(e) => handleProceed(e, category._id, category.name)}>
            <ListItemAvatar>
              <Avatar variant="rounded" alt="Category Items" src={categoryPhotosArr[idx]} style={{ width: '50px', height: '50px' }} />
            </ListItemAvatar>
            <ListItemText
              primary={category.name}
              style={{ marginLeft: '10px' }}
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
