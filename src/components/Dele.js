import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col, Table, Container,Card } from 'react-bootstrap';
import '../mid.css'

const Dele = ({led,clr}) => {

  return (
    <>
    <Col lg={3} xs={12} className='mt-3 ps-5'>
    
                    <Card style={{ width: '14rem' }} className='sd'>
                        <Card.Body>
                            
                            <Card.Title className='sdh'>Deleted tasks</Card.Title>
                            {led.map((i,index)=>(
                                <>
                            <Card.Text className='ct mt-3'>
                                {i.task}
                            </Card.Text>
                          
                            </>
                            ))}
                            <a onClick={clr} className='lnk'>clear all</a>
                        </Card.Body>
                    </Card>
    </Col>
    </>
  )
}

export default Dele