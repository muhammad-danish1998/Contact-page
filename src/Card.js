import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { blue } from '@material-ui/core/colors';
import images from './a.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
   padding:20,
   backgroundColor:'white',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transform: 'translateY(-20px)',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.5)',
    
  },
  icons:{
      fontSize:40,
      color:'blue',
  }
}));

export  function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <HomeIcon className={classes.icons}/>
          <h2>Address</h2>
          <p>4885 Pretty View Lane, Lorem ipsum, Dolor sit amet, New York, USA</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
              <PhoneIcon className={classes.icons} />
              <h2>Phone</h2>
              <p>4885 Pretty View Lane, Lorem ipsum, Dolor sit amet, New York, USA</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <MailIcon className={classes.icons} />
          <h2>Mail</h2>
          <p>4885 Pretty View Lane, Lorem ipsum, Dolor sit amet, New York, USA</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
