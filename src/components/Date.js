import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col } from 'react-bootstrap';
import '../top.css'


const Date = () => {
    return (
        <>
            <Col lg={4} sm={2} xs={1} className='dt'>
                october,13th<br></br>
                <div className='tx'>3 active tasks</div>
            </Col>
        </>
    )
}

export default Date