import React from 'react';


export class ErrorPage extends React.Component{
    render(){
        return(
            <>  
            <div className='d-flex justify-content-center'>
                <div>
                    <h1>404</h1>
                    <p><strong>Página no encontrada</strong></p>
                </div>
                
            </div>
            </>
        )
    }
}