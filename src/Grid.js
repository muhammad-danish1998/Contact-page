import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BasicTextFields } from "./TextField";
import { Map } from "./Map";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:430,
    margin:40,
  },
}));

export  function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm ={12} md ={6} lg = {6} >
          <Paper className={classes.paper} >
          <BasicTextFields/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm ={12} md ={6} lg = {6}>
          <Paper className={classes.paper}>
        <Map />          
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
