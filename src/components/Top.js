import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';
import '../top.css'
import Head from './Head';
import Sett from './Sett';
import Date from './Date';

const Top = () => {
  return (
    <>
    <Container fluid className='rw'>
        <Row>
            <Date />
            <Head />
            <Sett />
        </Row>
    </Container>
    </>
  )
}

export default Top