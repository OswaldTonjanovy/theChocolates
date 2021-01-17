import React from 'react';
import { Showchocolate } from './ShowChoco';
import barra from './Images/choco_three.jpg'
import bombon from "./Images/bombones.jpg";
import turron from "./Images/turron.JPG";
import bombones from "./Images/rellenos.jpg";
import pastel from "./Images/pastel.jpg";
import helado from "./Images/helado.jpg";
import { MDBRow, MDBCol } from "mdbreact";


export class Chocolates extends React.Component {

    state = {
        chocolate: [
                  { sabor: 'Barra', imagen: barra },    
                  { sabor: 'Bombon', imagen: bombon },
                  { sabor: 'Turron', imagen: turron },
                  { sabor: 'Bombones Rellenos', imagen: bombones },
                  { sabor: 'Pastel', imagen: pastel },
                  { sabor: 'Helado', imagen: helado }

                ],
                favorite: {}
            };

    favorite = (chocolate, indice) => {

        console.log('this is your film');
        console.log(chocolate, indice);
        this.setState({
            favorite: chocolate,
        })
    }

    render() {

    return (<>
                <div className='topCho'></div> 
                <MDBRow sm='9'  className='d-flex  justify-content-center'>
                    <MDBCol  sm='6' className='titlecho shadow-lg d-flex  justify-content-center'>
                        <p className='text-center my-4'>Tu seleccion</p>
                        <div  className='rightCho'>
                            {this.state.favorite.sabor ? 
                            <div className='favorite'>
                                <h2 className='texSelec text-center text-black'>Chocolate selecto</h2>
                                <img className='choSelec' src={this.state.favorite.imagen} />
                                <p className='text-black text-center'><strong>{this.state.favorite.sabor}</strong></p>
                            </div> : <p className='text-center text-black'>No has selecionado aun</p>} 
                        </div>

                    </MDBCol>
                  </MDBRow>
                  <div className='nuestroChocolate'> 
                {
                    this.state.chocolate.map((choco, i) => {
                        return (
                            <Showchocolate key={i} choco={choco} marcar={this.favorite} indice={i}/>
                        )
                    })
                }
                </div>
            </>
        )
    }
};