import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import imgdown from './Images/mom.jpg';
import cursouno from './Images/c_one.jpg';
import itemone from './Images/itemone.jpg';
import itemtwo from './Images/itemtwo.jpg';
import itemthree from './Images/itemthree.jpg';

export class School extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            contador: 1
        };
    }

    contador = 0;
        HelloWord(name, edad) {
        let presentacion = (
            <div>
                <h1>Hello I'm {name}</h1>
                <h2> age {edad}</h2>
            </div>
        );

        return presentacion;
    }
    suma = () => { 
            this.setState({ contador: this.state.contador + 1 })
}

    resta = (e) => {
        this.setState({ contador: this.state.contador - 1 })
 }

    render() {
        return(<>
                <MDBRow className='' style={{marginBottom: '100px'}}>
                    <MDBCol md="4" className='black'></MDBCol>
                    <MDBCol md="8" className='twochool'>
                        <h1 className="titleScho white-text">Nuestros Mejores tutoriales</h1>
                        <h4 className="minitex white-text my-4">Todo lo que necesitas saber sobre el cultivo del Cacao y la industria de Chocolateria </h4>
                    </MDBCol>
                </MDBRow>
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol md="4">
                            <MDBView hover>
                                <img
                                  src={itemone}
                                  className="img-fluid"
                                  alt=""
                                />
                                <MDBMask className="flex-center" overlay="cyan-strong">
                                    <p className="white-text">Degustación</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                      <MDBCol md="4">
                          <MDBView hover>
                              <img
                                src={itemtwo}
                                className="img-fluid"
                                alt=""
                              />
                              <MDBMask className="flex-center" overlay="cyan-strong">
                                <p className="white-text">Chocolatier</p>
                              </MDBMask>
                          </MDBView>
                      </MDBCol>
                      <MDBCol md="4">
                          <MDBView hover>
                              <img
                                src={itemthree}
                                className="img-fluid"
                                alt=""
                              />
                              <MDBMask className="flex-center" overlay="cyan-strong">
                                <p className="white-text">Selección</p>
                              </MDBMask>
                          </MDBView>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-4">
                        <MDBCol md="6">
                            <MDBView hover zoom>
                                <img
                                  src={cursouno}
                                  className="img-fluid"
                                  alt=""
                                />
                                <MDBMask className="flex-center" overlay="cyan-light">
                                  <h4 className="white-text"><strong>Artesanal</strong></h4>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="6">
                            <img
                              src={imgdown}
                              className="img-fluid rounded-circle hoverable"
                              alt=""
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className='' style={{marginTop: '100px'}}>
                  <MDBCol md="4" ></MDBCol>
                  <MDBCol md="8" className='onechool'></MDBCol> 
                </MDBRow>
        </>
        )
    }


}