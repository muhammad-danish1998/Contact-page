import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export  function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First Name" style ={{width:'100%',marginBottom:'30px',marginTop:'30px',}} /><br />
      <TextField id="standard-basic" label="Last Name" style ={{width:'100%'}} /><br />
      <TextField id="standard-basic" label="Mobile" style ={{width:'100%'}} /><br />
      <TextField id="standard-basic" label="Email" style ={{width:'100%'}} /><br />
      <TextField
          id="standard-textarea"
          label="Message"
          placeholder=""
          multiline
          style ={{width:'100%'}}  /><br />
      <Button variant="contained" color="primary" style ={{width:'100%',marginTop:'20px',}}>
        Submit
      </Button>
      
    </form>
  );
}
