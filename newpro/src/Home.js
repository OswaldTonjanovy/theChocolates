import React from 'react';
import Slider from './Slider';
import aprende from "./Images/aprende.jpeg";
import crealo from "./Images/crealotu.jpg";
import enseña from "./Images/enseña.jpg";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import 'react-bootstrap';


export class Home extends React.Component{

    render(){
        return(
        <>
            <MDBContainer>
                <Slider/>
            </MDBContainer>

            <div className='homecenter'>
                <MDBRow md='12' className='cardContiner'>
                    <MDBCol md='3' sm='3'>
                        <MDBCard className='card my-4'>
                            <MDBCardImage
                              top
                              src={aprende}
                              overlay='white-slight'
                              hover
                              waves
                              alt='MDBCard image cap'
                            />
                        <MDBCardBody className='elegant-color white-text rounded-bottom'>
                            <a href='#!' className='activator waves-effect waves-light mr-4'>
                              <MDBIcon icon='share-alt' className='white-text' />
                            </a>
                            <MDBCardTitle>Aprende.</MDBCardTitle>
                            <hr className='hr-light' />
                            <MDBCardText className='white-text'>
                              Some quick example text to build on the card title and make up the
                              bulk of the card&apos;s content.
                            </MDBCardText>
                            <a href='#!' className='black-text d-flex justify-content-end'>
                                <h5 className='white-text'>
                                  Read more
                                </h5>
                            </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md='3' sm='3'>
                        <MDBCard className='card my-4'>
                            <MDBCardImage
                              top
                              src={crealo}
                              overlay='white-slight'
                              hover
                              waves
                              alt='MDBCard image cap'
                            />
                            <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                <a href='#!' className='activator waves-effect waves-light mr-4'>
                                  <MDBIcon icon='share-alt' className='white-text' />
                                </a>
                                <MDBCardTitle>Crealo tu.</MDBCardTitle>
                                <hr className='hr-light' />
                                <MDBCardText className='white-text'>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card&apos;s content.
                                </MDBCardText>
                                <a href='#!' className='black-text d-flex justify-content-end'>
                                    <h5 className='white-text'>
                                      Read more
                                    <MDBIcon icon='angle-double-right' className='ml-2' />
                                    </h5>
                                </a>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                <MDBCol md='3' sm='3'>
                    <MDBCard className='card my-4'>
                        <MDBCardImage
                          top
                          src={enseña}
                          overlay='white-slight'
                          hover
                          waves
                          alt='MDBCard image cap'
                        />
                        <MDBCardBody className='elegant-color white-text rounded-bottom'>
                            <a href='#!' className='activator waves-effect waves-light mr-4'>
                              <MDBIcon icon='share-alt' className='white-text' />
                            </a>
                            <MDBCardTitle>Enseña.</MDBCardTitle>
                            <hr className='hr-light' />
                            <MDBCardText className='white-text'>
                              Some quick example text to build on the card title and make up the
                              bulk of the card&apos;s content.
                            </MDBCardText>
                            <a href='#!' className='black-text d-flex justify-content-end'>
                                <h5 className='white-text'>
                                  Read more
                                  <MDBIcon icon='angle-double-right' className='ml-2' />
                                </h5>
                            </a>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
              </ MDBRow>
              
              <div className='homedown' >
                  <MDBContainer>
                      <MDBRow>
                          <MDBCol sm='12' className='d-flex  justify-content-center'>
                              <p className='titledown bg-white rounded-pill text-center'>Tu seleccion</p>
                          </MDBCol>
                          <MDBCol sm='12'>
                              <p  className='text-center text-white my-4 py-4'>Aprende con nuetros tutoriales a hacer tu propio Chocolate artesanal,
                              partiendo desde el grano de cacao. Proceso de seleccion, descascarillado, molido, refinacion, temperado, moldeado.
                                Reserva tu inscripcion a nuetros cursos y talleres y conoce todo acerca del Cacao y el  Chocolate 
                              </p>
                          </MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol><div className='downcard  #6d4c41 brown darken-1' ></div></MDBCol>
                          <MDBCol><div className='downcard  #5d4037 brown darken-2' ></div></MDBCol>
                          <MDBCol><div className='downcard  #4e342e brown darken-3' ></div></MDBCol>
                          <MDBCol><div className='downcard  #3e2723 brown darken-4' ></div></MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </div>
            </div>
        </>)
    }

};