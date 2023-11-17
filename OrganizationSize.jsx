import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './App.css'

 function OrganizationSize() {
     
    const organitionSizes = [
        {
        
            label: '100+ employees',
        },
        {
        
          label: '500+ employees',
        },
        {
        
          label: '1000+ employees',
        },
        {
        
          label: '5000+ employees',
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
            <h3 className='organizationSizeText'>ORGANIZTION SIZE</h3>
          <TextField
          style={{
            marginLeft:"-628px",
            marginTop:"-3px"
          }}
            id="outlined-select-currency"
            select
            label="Organization Size"
            placeholder='--Select--'
            // defaultValue="EUR"
           
            >
          {organitionSizes.map((option) => (
             <MenuItem key={option.value} value={option.label} >
             {option.label}
           </MenuItem>
          ))}   
           
          </TextField>
            </div>
            </Box>
            </div>
            )}

            export default OrganizationSize