import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './App.css'

 function Industry() {
     
    const industry = [
        {
        
            label: 'option',
        },
        {
        
          label: 'option',
        },
        {
        
          label: 'option',
        },
        {
        
          label: 'option',
        },
      ];
      
     return (
        <div>

      <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '77.5ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <h3 className='industryText'>INDUSTRY</h3>
          <TextField
          style={{
            marginLeft:"-628px",
            marginTop:"-3px"
          }}
            id="outlined-select-currency"
            select
            label="Industry"
            placeholder='--Select--'
            // defaultValue="EUR"
           
            >
          {industry.map((option) => (
             <MenuItem key={option.value} value={option.label} >
             {option.label}
           </MenuItem>
          ))}   
           
          </TextField>
            </div>
            </Box>
            </div>
            )}

            export default Industry