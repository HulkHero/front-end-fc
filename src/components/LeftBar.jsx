import React from 'react'
import {Grid} from "@mui/material"
import Image from "../assets/images/image-web-3-desktop.jpg"
const LeftBar = () => {
  return (
    <Grid container sx={{ml:"20px",mr:"20px"}}>
      <Grid item xs={12}>
        <img src={Image} style={{ maxWidth:"95%",minWidth: "90%", height: "50vh", marginRight:"20px" }}></img>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item md={4}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                margin: "20px 0px",
                textAlign:"center"
              }}
            >
              The Bright Future of Web 3 ?
            </p>
          </Grid>
          <Grid item md={8}>
            <p style={{textAlign:"left",overflowWrap:"break-word",overFlow:"hidden",fontSize:"1.1rem",overflow:"hidden",margin:"28px 0px",opacity:"0.8",maxWidth:"90%"}}>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise? Read more
            </p>
            <button style={{padding:"10px",backgroundColor:"hsl(5, 85%, 63%)",border:"0px",color:"white",width:"200px",marginBottom:"20px"}}>Read more</button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LeftBar