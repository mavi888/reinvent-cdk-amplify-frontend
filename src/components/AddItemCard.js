import React, { useState } from 'react';
import '../App.css';
import { TextField, Button, Grid, Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    backgroundColor: "orange",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  }
});

const NavBar = ({
  addAction
}) => {
  const classes = useStyles();
  const [taskName, setTaskName] = useState()

  return (
    <Grid item xs={12}>
      <Paper className="card fixedHeight">
          <TextField
            label="Item"
            onChange={(event)=>{
              setTaskName(event.target.value)
            }}
            value={taskName}
            fullWidth
          >
          </TextField>
        <div style={{float: 'right', paddingTop: '15px', display: 'flex'}}>
          <Button
            variant="contained" 
            color="primary"
            className={classes.header}
            onClick={()=>{
              addAction(taskName)
              setTaskName('')
            }}
          >
            Add
          </Button>
        </div>
        <div style={{clear: 'both'}} />
      </Paper>
    </Grid>
  )
}

export default NavBar
