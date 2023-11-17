import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function OrganizationName() {
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
        <h3 className='organizationNameText'>ORGANIZATION NAME</h3>

<TextField
  id="outlined-helperText"
  label="Organization Name"
placeholder='ABC Organization'
style={{
    marginLeft:"-628px",
    marginTop:"-3px"
  }}
//   helperText="Some important text"
/>
</div>
</Box>
  </div>
  )}
  export default OrganizationName