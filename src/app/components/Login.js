
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@mui/material/styles';
import Container from '@mui/material/Container';

// import Copyright from "../copyright/Copyright";


import {useForm} from 'react-hook-form';





// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));


const AuthContent = ({register, errors, type, classes, onSubmit, ...rest}) => (
  <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Avatar >
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // inputRef={register({
            //         required: 'Please enter your email.'
            //     })}
            autoComplete="email"
            autoFocus
            // error={errors.email ? true : false}
            // helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
          //   inputRef={register({
          //     required: 'Please enter a password.'
          // })}
          // error={errors.password ? true : false}
            // helperText={errors.password ? errors.password.message : ""}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
);


const SigninForm = ({type, onSubmit}) => {
  const {handleSubmit, register, errors} = useForm();
  // const classes = useStyles();
  return (
          <AuthContent
          // classes={classes}
              as="form"
              errors={errors}
              maxWidth="400px"
              onSubmit={handleSubmit((data) => onSubmit(data))}
              register={register}
          />
  );
};

export default SigninForm;
