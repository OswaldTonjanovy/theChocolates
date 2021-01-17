import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

 export class Contactanos extends React.Component{

    nombreget = React.createRef();
    gmailget = React.createRef();
    opinionget = React.createRef();
    cometget = React.createRef();

    
    
    state={
      email:'',
      nombre:'',
      hid: false,
        user:{}
    }
    onChangeUser = (e) => {
      this.setState({
        nombre: e.target.value,
        hid : true,
      })
    }
  
    onChangeEmail = (e) => {
      this.setState({
        email: e.target.value,
        hid : true,
      })
    }

    reciveform = (e) => {
        e.preventDefault();     

        const user = {
            nombre : this.nombreget.current.value,
            gmail : this.gmailget.current.value,
            comentario : this.cometget.current.value,
            opinion : this.opinionget.current.value
            
        }
        console.log(user.otro);
        this.setState({ user : user });
    };

     render(){

        let { nombre, gmail, comentario, opinion  } = this.state.user;

         return(
         <>    
              <MDBContainer>
                <MDBRow>
                  <MDBCol sm='6'>

                      <form className='oneform border border-redius'  onSubmit={this.reciveform} >
                        <h4 className='my-2'><strong>Tus datos seran guardados al presionar enviar</strong></h4>
                          <label >Nombre</label>
                          <input className='border border-redius' type='text' name='nombre' ref={this.nombreget}/>

                          <label className='my-2'>Gmail</label>
                          <input className='border border-redius' type='text' name='lastname' ref={this.gmailget}/> 

                          <label className='my-2' >Opinion</label>
                          <input className='border border-redius' type='text' name='nombre' ref={this.opinionget}/>

                          <label className='my-2' >Dejar un comentario</label>
                          <input className='border border-redius' type='text' name='coment' ref={this.cometget}/>

                          <button className='btnfrom m-auto ' >Enviar</button>
                    </form>

                  </MDBCol> 
                  <MDBCol sm='6'>

                  { this.state.user.nombre &&
                        <div className='oneform border border-redius'>
                            <h4 className='m-auto my-1'>Usuario Registrado como <strong>{nombre}</strong></h4>
                            <p className='m-auto my-1' >Correo : <strong>{gmail}</strong></p>
                            <p className='m-auto my-1' >Opinion : <strong>{opinion}</strong></p>
                            <p className='m-auto my-1' >Este fue su comentario: <strong>{ comentario }</strong></p>
                        </div>}

                    </MDBCol>              
                  </MDBRow>
              </MDBContainer>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='6'>

                          { this.state.hid && <div className='oneform'>
                          <h2>{this.state.nombre}</h2>
                          <h2>{this.state.email}</h2> 
                          </div> }

                        </MDBCol>
                        <MDBCol md="6">

                            <form >
                              <p className="h4 text-center mt-4">Tus datos se enviaran de manera Reactiva</p>
                              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Nombres
                              </label>

                              <input 
                              type="text" 
                              id="defaultFormContactNameEx" 
                              className="form-control" 
                              onChange={this.onChangeUser}/>

                              <br />
                              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Gmail
                              </label>
                              <input 
                              type="email" 
                              id="defaultFormContactEmailEx" 
                              className="form-control"
                              onChange={this.onChangeEmail} />
                              <br />
                              <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Opinion
                              </label>
                              <input 
                              type="text" 
                              id="defaultFormContactSubjectEx" 
                              className="form-control" />
                              <br />
                              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                              </label>
                              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                              </form>
                              
                          </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </>)
     }

}