// import Box from '@mui/material/Box';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'

function LastName() {
  return (
    <div>
    <Box    
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '37ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h3 className='lastnametext'>LAST NAME</h3>
        <TextField
        style={{
          marginLeft:"20px",
          marginTop:"-3px"
        }}
          required
          id="outlined-required"
          label="Last Name"
          placeholder='eg: Doe'
        />
        </div>
        </Box>
        </div>
        )}

export default LastName