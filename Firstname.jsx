// import Box from '@mui/material/Box';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'

function FirstName() {
  return (
    <div>
    <Box  
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width:"37ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h3 className='firstnametext'>FIRST NAME</h3>
        <TextField
        style={{
          marginLeft:"39px",
          marginTop:"-3px"
        }}
          required
          id="outlined-required"
          label="First Name"
          placeholder='eg: John'
        />
        </div>
        </Box>
        </div>
        )}

export default FirstName