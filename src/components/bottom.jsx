import React from 'react'
import {Grid} from "@mui/material"
import Img1 from "../assets/images/image-gaming-growth.jpg"
import Img2 from "../assets/images/image-retro-pcs.jpg"
import Img3 from "../assets/images/image-top-laptops.jpg"
import "./rightbar.css"
const Bottom = () => {
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",alignContent:"flex-start",alignItems:"center",justifyContent:"space-evenly",marginTop:"20px",marginLeft:"20px"}}>
      <div style={{display:"flex",marginTop:"10px"}}>
          <img src={Img1} alt="hello" style={{maxHeight:"200px",alignSelf:"center",fontWeight:"bold"}} >
          </img>
          <div>
            <h6 style={{opacity:"0.8",fontSize:"2rem",margin:"5px",marginTop:"25px"}}>
              01
            </h6>
            <h5 className='head' style={{margin:"5px",fontSize:"1.5rem",fontWeight:"bold"}}>
              Heading
            </h5>
            <h6 style={{margin:"5px",fontSize:"1rem"}}>
              hello asjdna jdsnfsajnf jsanfdjasf
            </h6>
          </div>
        </div>
      
      <div style={{display:"flex",marginTop:"10px"}}>
          <img src={Img2} alt="hello" style={{maxHeight:"200px",alignSelf:"center"}} >
          </img>
          <div>
            <h6 style={{opacity:"0.8",fontSize:"2rem",margin:"5px",marginTop:"25px"}}>
              02
            </h6>
            <h5 className='head' style={{margin:"5px",fontSize:"1.5rem",fontWeight:"bold"}}>
              Heading
            </h5>
            <h6 style={{margin:"5px",fontSize:"1rem"}}>
              hello asjdna jdsnfsajnf jsanfdjasf
            </h6>
          </div>
         
      




      </div>

      <div style={{display:"flex",marginTop:"10px"}}>
          <img src={Img3} alt="hello" style={{maxHeight:"200px",alignSelf:"center"}} >
          </img>
          <div>
            <h6 style={{opacity:"0.8",fontSize:"2rem",margin:"5px",marginTop:"25px"}}>
              03
            </h6>
            <h5 className='head' style={{margin:"5px",fontSize:"1.5rem",fontWeight:"bold"}}>
              Heading
            </h5>
            <h6 style={{margin:"5px",fontSize:"1rem"}}>
              hello asjdna jdsnfsajnf jsanfdjasf
            </h6>
          </div>
        </div>
    </div>
    {/* <Grid contianer style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
      <Grid item style={{maxWidth:"400px",minHieght:"200px",display:"flex"}} xs={12} sm={6} md={4}>
        <div style={{display:"flex"}}>
          <img src={Img1} alt="hello" style={{maxHeight:"200px",alignSelf:"center"}} >
          </img>
          <div>
            <h6 style={{opacity:"0.8",fontSize:"2rem",margin:"5px",marginTop:"25px"}}>
              01
            </h6>
            <h5 className='head' style={{margin:"5px",fontSize:"1.5rem"}}>
              Heading
            </h5>
            <h6 style={{margin:"5px",fontSize:"1rem"}}>
              hello asjdna jdsnfsajnf jsanfdjasf
            </h6>
          </div>
        </div>
      </Grid>
      <Grid item style={{maxWidth:"300px",minHieght:"200px",display:"flex"}} xs={12} sm={6} md={4}>
        <div>
          <img src={Img1} alt="hello" style={{maxHeight:"200px",alignSelf:"center"}} >
          </img>
          <div>
            <h6 style={{opacity:"0.8",fontSize:"2rem",margin:"5px",marginTop:"25px"}}>
              01
            </h6>
            <h5 className='head' style={{margin:"5px",fontSize:"1.5rem"}}>
              Heading
            </h5>
            <h6 style={{margin:"5px",fontSize:"1rem"}}>
              hello asjdna jdsnfsajnf jsanfdjasf
            </h6>
          </div>
          </div>
  
      </Grid>
      <Grid item style={{maxWidth:"300px",minHieght:"200px",}} xs={12} sm={6} md={4}>
      <div style={{display:"flex"}}>
          <img src={Img1} alt="hello" style={{maxHeight:"200px",alignSelf:"center"}} >
          </img>
          <div>
            <h6 style={{opacity:"0.8",fontSize:"2rem",margin:"5px",marginTop:"25px"}}>
              01
            </h6>
            <h5 className='head' style={{margin:"5px",fontSize:"1.5rem"}}>
              Heading
            </h5>
            <h6 style={{margin:"5px",fontSize:"1rem"}}>
              hello asjdna jdsnfsajnf jsanfdjasf
            </h6>
          </div>
        </div>
      </Grid>
    </Grid> */}
    </>
  )
}

export default Bottom