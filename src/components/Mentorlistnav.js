import { Box, Grid } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap';
// import { SearchBar } from 'react-bootstrap-components';

import { MDBCol, MDBIcon } from "mdbreact";

function Mentorlistnav() {
  return (
    
    <div style={{
      display:"flex"
    }}><Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid item xs>
        <item><span style={{
            color:"#FAA81D"
        }}><b>Mentors List</b></span></item>
      </Grid>
      <Grid item xs={6}>
        <item><MDBCol md="6" >
      <div className="input-group md-form form-sm form-1 pl-0" style={{
        // marginLeft:"80%"
      }}>
        <div className="input-group-prepend">
          
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{
            backgroundColor:"#F4F5F8",
            
          }}
        />
      </div>
    </MDBCol></item>
      </Grid>
      <Grid item xs>
        <item> <Button variant="contained" style={{
            backgroundColor:"#FAA81D"
        }}>+ New Batch</Button></item>
      </Grid>
    </Grid>
  </Box></div>
  
  )
}

export default Mentorlistnav;