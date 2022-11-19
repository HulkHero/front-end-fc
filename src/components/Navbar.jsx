import React from 'react'
import "./nav.css"
import {Box} from "@mui/material"
const Navbar = () => {
  return (
       <>
       <div className='n-wrapper' style={{display:"flex"}}>
       <div className='n-left' style={{marginRigth:"auto",display:"flex",marginLeft:"20px"}}>
        W.
       </div>
       <div className='n-right' style={{display:"flex"}}>
        <Box className='n-list' sx={{display:{xs:"none",sm:"block"}}} >
            <ul style={{listStyleType:"none"}}>
                <li>
                    Home
                </li>
                <li>
                    New
                </li>
                <li>
                    Populor
                </li>
                <li>
                    Trending
                </li>
            </ul>
            </Box>
       </div>
       </div>
       
       

       </>
  )
}

export default Navbar