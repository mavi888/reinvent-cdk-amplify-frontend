import React from 'react';
import '../App.css';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

import {AmplifySignOut} from '@aws-amplify/ui-react'

const useStyles = makeStyles({
  header: {
    backgroundColor: "grey",
    color: "white",
    boxShadow: "0px 0px 0px 0px"
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.header}>
          <Toolbar>
            <Typography className="navBarTitle">
              Smart Shopping List
            </Typography>

            <AmplifySignOut/> 
          </Toolbar>
        </AppBar>
  )
}

export default NavBar
