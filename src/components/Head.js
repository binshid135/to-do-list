import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import '../top.css'
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <>
    <Col lg={6} sm={9} xs={10}>
    <div className='hd justify-content-center ps-3'>To do list</div>
    </Col>
    </>
  )
}

export default Head