import React from 'react'
import {Grid} from "@mui/material"
import LeftBar from './LeftBar';
import RigthBar from './RigthBar';
const Home = () => {
  return (
    <Grid container>
        <Grid item md={8}>
            <LeftBar></LeftBar>
        </Grid>
        <Grid item md={4} >
            <RigthBar></RigthBar>
            </Grid> 
    </Grid>
  )
}

export default Home