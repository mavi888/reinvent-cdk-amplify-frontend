import React from 'react';
import '../App.css';
import { Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    backgroundColor: "orange",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  }
});

const NavBar = ({
    purchaseAllAction
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
        <Button
        variant="contained" 
        color="primary"
        className={classes.header}
        onClick={()=>{
            purchaseAllAction()
        }}
        >
        Notify that everything was purchased
        </Button>
    </Grid>
  )
}

export default NavBar
