import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Str = () => {
  return (
    <>
    <div className='mt-5'>
    <center><Link to = "link" className><Button style={{backgroundColor:"rgb(81, 229, 255)",color:" rgb(23, 42, 58)"}} className='btn-lg'>Get started</Button></Link></center>
    </div>
    </>

  )
}

export default Str