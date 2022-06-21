import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'

function Product() {
  return (
    <Container style={{minHeight:"93vh"}} className='mt-5'>
        <Row className='col-lg-4 col-sm-12'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Row>
    </Container>
  
  )
}

export default Product