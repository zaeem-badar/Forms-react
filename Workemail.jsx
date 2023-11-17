// import Box from '@mui/material/Box';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'

function WorkEmail() {
  return (
    <div>
    <Box  
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width:"77.5ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h3 className='workemailtext'>WORK EMAIL</h3>
        <TextField
        style={{
          marginLeft:"-628px",
          marginTop:"-3px"
        }}
          required
          id="outlined-required"
          label="Work email"
          placeholder='eg: Johndoe123@gmail.com'
        />
        </div>
        </Box>
        </div>
        )}

export default WorkEmail