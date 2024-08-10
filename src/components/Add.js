import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col } from 'react-bootstrap';
import '../mid.css'
import { useState } from 'react';
import Content from './Table';

const Add = ({add,res,vl}) => {
    
    return (
        <>
        <Row className='justify-content-center ps-5'>
                <Col lg={3} xs={8}>
                    <input type="text" className='form-control ad mt-5' value={vl} onChange={(e)=>res(e.target.value)}></input>
                </Col>
                <Col lg={2} xs={4}>
                    <Button className='bt mt-5' onClick={add}>Add</Button>
                </Col>
            </Row >
        </>
    )
}

export default Add