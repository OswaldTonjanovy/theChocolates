import React from "react";
import {MDBContainer, MDBIcon } from "mdbreact";
import "react-slideshow-image/dist/styles.css";
import image1 from "./Images/choco_two.jpg";
import image2 from "./Images/choco_one.jpeg";
import image3 from "./Images/choco_three.jpg";
import image4 from "./Images/chocolatehome.jpg";


const fadeImages = [ image1,  image2, image3, image4 ];


class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        contador: 0,
        image: fadeImages[0],
        text: 'Del Cacao al Chocolate'
        
    }
}

imageChange = () => {

      this.setState({contador: this.state.contador + 1 })
      
      if(this.state.contador === 0){
        this.setState({text:'Del Cacao al Chocolate'})
      }else if(this.state.contador === 1){
        this.setState({text:'Variedad en Chocolates'})
      }else if(this.state.contador=== 2){
        this.setState({text:'Apende, Chocolate Artesanal'})
      }else if(this.state.contador === 3){
        this.setState({text:'Contacta con Nosotros'})
        this.setState({contador: 0})
    }

    this.setState({
      image: fadeImages[this.state.contador]
    })
  }
  


  render(){
        return(

        <div className="fondo img-fluid" style={{backgroundImage: `url(${this.state.image})`}}>
            <MDBContainer  className='fondoson row row-cols-4 m-0 pl-4'>
                <div className='col-sm-1'>
                    <button className='btn bg-white'  onClick={this.imageChange}><MDBIcon icon="angle-double-left" /></button>
                </div> 
                <div className='col-sm-9 d-flex align-items-center justify-content-center'>
                    <p className='centertitle'>{this.state.text}</p>
                </div>
                <div className='col-sm-1' >
                    <button className='btn bg-white'  onClick={this.imageChange}><MDBIcon icon="angle-double-right" /></button>
                </div>
            </MDBContainer>
        </div>
      )
    }

}

export default Slider;
