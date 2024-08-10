import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';
import '../mid.css'
import Add from './Add';
import Content from './Table';
import Top from './Top';


const Middle = () => {
  return (
    <>
    <Top />
    <Container fluid className='cnt'>
        <Content />
    </Container>
    </>
  )
}

export default Middle