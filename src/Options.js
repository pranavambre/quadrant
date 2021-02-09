import React, {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import {Tabs, Tab, TabPanel, Modal, Row, Button, Col, Form, Card, TabContent, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logo from './fashion.jpeg';
import { TextField } from '@material-ui/core';
const GridWrapper = styled.div`
  display: block;
  grid-gap: 10px;
  margin-left: 270px;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


export const Options = (props) => (
   
  <GridWrapper>
    <Container>
    <h5 class="option_heading p-4">Option Attribute</h5>
      <Row>
        <Col lg="5">
          <img src={logo} width="100%" />
            <div class="col-lg-4 mt-4 p-4 add-image">
                <i class="far fa-file-image pb-2"></i>
                <p class="m-0">ADD IMAGES</p>
            </div>
        </Col>
        <Col lg="7">
            <Card>
              {/* <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">CLASSIFICATION</a></li>
                  <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">COMMERICAL</a></li>
                  <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">NOTES</a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">LINKS</a></li>
              </ul> */}
               
              <Tabs defaultActiveKey="classification" id="uncontrolled-tab-example">
                <Tab eventKey="classification" title="CLASSIFICATION">
                    <p>Home hello</p>
                    <Row>
                        <Col lg="6">
                          <TextField label="Name" InputLabelProps={{ shrink: true }} size="medium" fullWidth="true" placeholder="Boot Cut Jean"> </TextField>
                        </Col>
                        <Col lg="6">
                         <TextField label="Type" InputLabelProps={{ shrink: true }} size="medium" fullWidth="true" placeholder="New"></TextField>
                        </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <TextField label="Fabric" InputLabelProps={{ shrink: true }} fullWidth="true"  placeholder="Kurabo Selvedge Denim"></TextField>
                    </Col>
                    </Row> 
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
               
                                   
              {/* <TabContent>
                  <div role="tabpanel" class="tab-pane active" id="home">
                    <Row>
                        <Col lg="6">
                          <TextField label="Name" InputLabelProps={{ shrink: true }} size="medium" fullWidth="true" placeholder="Boot Cut Jean"> </TextField>
                        </Col>
                        <Col lg="6">
                         <TextField label="Type" InputLabelProps={{ shrink: true }} size="medium" fullWidth="true" placeholder="New"></TextField>
                        </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <TextField label="Fabric" InputLabelProps={{ shrink: true }} fullWidth="true"  placeholder="Kurabo Selvedge Denim"></TextField>
                    </Col>
                    </Row> 
                      
                  </div>
                  <div role="tabpanel" class="tab-pane" id="profile">This page is not implemented yet</div>
                  <div role="tabpanel" class="tab-pane" id="messages">This page is not implemented yet</div>
                  <div role="tabpanel" class="tab-pane" id="settings">This page is not implemented yet</div>
              </TabContent> */}
          </Card>
        </Col>
      </Row>
    </Container>
    
  </GridWrapper>
)