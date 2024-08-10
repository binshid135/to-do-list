
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col, Table, Container,Card } from 'react-bootstrap';
import '../mid.css'

const Cmp = ({ dt, y }) => {

    return (
        <>
            
                {/* <div className='tbl'> */}
                    {/* <Table responsive>
                        <th className='txt'>completed task</th>
                        {dt.map((i, index) => (
                            <>
                                <tr className='ms-3' key={index}>
                                    <td className='txt'>
                                        <div className='ms-3' style={{ backgroundColor: "rgb(23, 42, 58)", color: "white" }}>{i.task}</div>
                                    </td>
                                    <td>
                                        <img src="../delete.png" width="60px" height="60px" style={{ backgroundColor: "rgb(23, 42, 58)" }} onClick={() => y(index)} ></img>
                                    </td>
                                </tr>
                                <hr className='un'></hr>
                            </>
                        ))}
                    </Table> */}
                    {/* </div> */}
                    <Col lg={3} xs={12} className='mt-3 ps-4'>
                    <Card style={{ width: '16rem' }} className='sd'>
                        <Card.Body>
                            
                            <Card.Title className='sdh'>completed tasks</Card.Title>
                            {dt.map((i,index)=>(
                                <>
                            <Card.Text className='pt-3 ct'>
                                {i.task}<img src="../delete.png" width="40px" height="40px"  onClick={() => y(index)} className='sim'></img><br></br>
                            </Card.Text>
                            </>
                            ))}
                        </Card.Body>
                    </Card>
            </Col>
        </>
    )
}

export default Cmp
