"use client"
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Login from '../components/Login';

import signIn from '../../utils/auth';
import Snackbar from "@mui/material/Snackbar";

import Alert from '@mui/material/Alert';
import {useRouter} from 'next/navigation';

async function handleSignInForm(formData){
  await signIn(formData.email, formData.password);
  console.log("signin user");
}

export default function Signin() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");


  return (
    <>
    <Container maxWidth="sm">
      <Login onSubmit={handleSignInForm} />
    </Container>

    <Snackbar open={open} autoHideDuration={6000}>
  <Alert severity="error">
 {message}

  </Alert>
</Snackbar>

    </>
  );
}