import React from 'react';
import '../App.css';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Grid, Checkbox, TableFooter } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import MarkCompletedButton from './MarkCompletedButton'

const TableCard = ({
  data,
  removeAction,
  updateAction,
  markCompletedAction
}) => {
  return (
    <Grid item xs={12}>
      <Paper className="card">
        {data.length > 0 ?
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Purchased</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map( item => {
              return (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.itemName}
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox checked={item.isComplete}
                    onChange={(e) => updateAction(item.id,e.target.checked)} ></Checkbox>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={()=>removeAction(item.id, item.itemName)}
                    > 
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            }) }
              
          </TableBody>
        <TableFooter>
        <div style={{paddingTop: '15px', display: 'flex'}}>
          <MarkCompletedButton
            purchaseAllAction = {markCompletedAction} />
          </div>
        </TableFooter>
        </Table>
        
      : <Typography>You have not created any items</Typography>}
    </Paper>
    </Grid>
  )
}

export default TableCard
