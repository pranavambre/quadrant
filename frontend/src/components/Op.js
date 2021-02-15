import { } from '@material-ui/core';
import React from 'react'
import {  Card, Button} from 'react-bootstrap';

const Op = ({
  data: {
    id,
    name,
    type,
    fabric
  },

  
}) => (

  <Card style={{ width: '50rem' }}>
  <Card.Body>
    <Card.Text>
    <b>{id}</b> <b>Name: </b> {name} , <b>Type:</b> {type} , <b>Fabric:</b> {fabric} , <Button id={id} variant="primary">Edit</Button>
    </Card.Text>
  </Card.Body>
</Card>
  
 
)

export default Op