import React from 'react';
import { MDBIcon } from 'mdbreact';

export class Showchocolate extends React.Component{
    
    marcarFavorita = () =>{
         this.props.marcar(this.props.choco, this.props.indice);
    }

    render(){

        const {sabor, imagen} = this.props.choco;

        return(
          
              <div className='cardtwo  border border-dark my-4 mx-4 shadow-lg'>
                  <img className='img-fluid imgOpacity' src={imagen} />
                  <div className='d-flex flex-column align-items-center'>
                      <h3 className="mt-2 mb-0">{sabor}</h3>
                      <hr/>
                      <p className="border-top mx-3">Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                      <button className='btncard' onClick={this.marcarFavorita}>
                        <MDBIcon far icon="thumbs-up"/>
                      </button>
                  </div>
              </div>
      )
    }   
}
