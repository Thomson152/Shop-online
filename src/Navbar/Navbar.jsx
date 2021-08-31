import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from  'react-router-dom'


import logo from '../images/commerce.png'
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
     <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link}  to='/'  variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Shop Online
          </Typography>
          <div className={classes.grow} />
          {
            location.pathname==='/' ? <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge component={Link}  to='/cart' badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> : null
          }
       
        </Toolbar>
      </AppBar>
     </>
    )
}

export default Navbar
