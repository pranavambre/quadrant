import { useQuery, useMutation } from '@apollo/client'
import React, {useState, useEffect, useCallback} from 'react';
import {Tabs, Tab, Row, Button, Col, Form, Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logo from './fashion.jpeg';
import { TextField, Select, MenuItem,InputLabel, Table, TableBody ,TableCell , TableContainer , TableHead , TableRow ,Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  POSTS_QUERY,
  CREATE_OPTION_MUTATION, UPDATE_OPTION
} from './graphql'


const GridWrapper = styled.div`
  display: block;
  grid-gap: 10px;
  margin-left: 270px;
  background-color:#fff;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


 export const Options = () => {


  var fab = "", data_id = 0;
  const [formID, setFormId] = useState('0');
  const [formName, setFormName] = useState('');
  const [formType, setFormType] = useState('');
  const [formFabric, setFormFabric] = useState('');


  const { loading,error, data } = useQuery(POSTS_QUERY)
  
  const [createOption] = useMutation(CREATE_OPTION_MUTATION)

  const [updateOption] = useMutation(UPDATE_OPTION)


const onEditInformation = (object) => {

    setFormId(object.id);
    setFormName(object.name);
    setFormType(object.type);
    setFormFabric(object.fabric);
  }

//   const handleInputChange = (event, value) =>{
//     fab = value;
    
//  }

 const OnUpdateFabricChange = 
  (e,value) =>{
  setFormFabric(value);

  if (!(formID.localeCompare("0") == 0)){
  updateOption({
    variables: {
      id: formID,
      name: formName,
      type: formType,
      fabric: formFabric,
    },
    refetchQueries: [
      { query: POSTS_QUERY }
       ]
  })
  }

}

 
 const onUpdateTypeChange = 
  (e,value) =>{

  setFormType(e.target.value)
  if (!(formID.localeCompare("0") == 0)){
  updateOption({
    variables: {
      id: formID,
      name: formName,
      type: formType,
      fabric: formFabric,
    },
    refetchQueries: [
      { query: POSTS_QUERY }
       ]
  })
}
}



 const onUpdateNameChange = useCallback(
    (e) =>{
    setFormName(e.target.value)
  //  console.log("dataid:"+ data_id);
  
    if (!(formID.localeCompare("0") == 0)){

      updateOption({
        variables: {
          id: formID,
          name: formName,
          type: formType,
          fabric: formFabric,
        },
        refetchQueries: [
          { query: POSTS_QUERY }
          ]
      })
      
    }
 },
);


  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault()
      console.log("name"+fab);
      if (!formName || !formType || !formFabric) return

      createOption({
        variables: {
          name: formName,
          type: formType,
          fabric: formFabric,
        },
        refetchQueries: [
        { query: POSTS_QUERY }
         ]
        
        
        
      })

      setFormName('')
      setFormType('')
      setFormFabric('')
    
    },

    // [createOption, formName, formType, fab]
  )
  

 return (
   
  <GridWrapper>
    <Container>
    <Form onSubmit={handleFormSubmit}>
    <h5 className="option_heading p-4">Option Attribute</h5>
      <Row>
        <Col lg="5">
          <img src={logo} alt="fashion_image" width="100%" />
            <Col lg="4" className="mt-4 py-3 pl-0 pr-0 add-image">
                <i className="far fa-file-image pb-2"></i>
                <p className="m-0">ADD IMAGES</p>
            </Col>
        </Col>
        <Col lg="7">
            <Card>
              <Tabs defaultActiveKey="classification" id="uncontrolled-tab-example">
                <Tab eventKey="classification" title="CLASSIFICATION">
                    <Row className="mt-5">
                        <Col lg="6" >
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                          Name
                        </InputLabel>
                          <TextField  id="name" InputLabelProps={{ shrink: true }}  size="medium"  onChange={onUpdateNameChange}  value={formName} fullWidth > </TextField>
                        </Col>
                        <Col lg="6">
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                          Type
                        </InputLabel>
                         <Select id="type" label="Type" value={formType}  size="medium" fullWidth onChange={onUpdateTypeChange}   >
                          <MenuItem value="New">New</MenuItem>
                          <MenuItem value="Old">Old</MenuItem>
                         </Select>
                        </Col>
                    </Row>
                    <Row>
                      <Col className="mt-4 pb-4" lg="6">
                         <Autocomplete
                           options= {fabricOptions}
                          //  getOptionLabel= { (option) => option.title}
                          getOptionLabel={option => option.title?option.title:option}
                          id="auto-complete"
                          value = {formFabric}
                          // onChange={(e)=> setFormFabric(e.target.value)}
                          onInputChange={OnUpdateFabricChange}
                          includeInputInList        
                          renderInput={(params) => <TextField {...params}    label="Fabric"  margin="normal" />}
                        />
                    </Col>
                    
                    </Row>
                    <Button type="submit">Add options</Button> 
                    
                </Tab>
                <Tab eventKey="commerical" title="COMMERICAL">
                 <p>Not yet implemented</p>
                </Tab>
                <Tab eventKey="notes" title="NOTES" >
                 <p>Not yet implemented</p>
                </Tab>
                <Tab eventKey="links" title="LINKS" >
                <p>Not yet implemented</p>
                </Tab>
            </Tabs>              
             
          </Card>
        </Col>
      </Row>
      <Row>
      <Col className="mt-5" lg="12">
                      {loading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p>Error :</p>
                      ) : (
                          
        
                        data.options.map((option, id) => <div><TableContainer component={Paper}>
                        <Table aria-label="simple table" >
                          <TableHead>
                            <TableRow>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                            <TableCell component="th" scope="row">{option.id}</TableCell>
                            <TableCell align="right">{option.name}</TableCell>
                          <TableCell align="right">{option.type}</TableCell>
                          <TableCell align="right">{option.fabric}</TableCell>
                          <TableCell align="right"><Button id={option.id} variant="success" onClick={() => { onEditInformation(option)}} >Edit</Button></TableCell>
                          </TableRow>
                          </TableBody>
                          
                          </Table>
                          </TableContainer></div> )
                      )}
                    </Col>
      </Row>
      </Form>
    </Container>
    
  </GridWrapper>
)
  }

   export default Options;

  const fabricOptions = [
    {
      title: "Kurabo Selvedge Denim"
    },
    {
      title: "Cone Selvedge Denim"
    },
    {
      title: "Berto Selvedge Denim"
    }
  ];

