import React from 'react';
import { NavLink } from 'react-router-dom'
import 'react-bootstrap';



export class Header extends React.Component{


    render(){
        
        return(
            <nav className='App-header'>
                <ul className='App-menu'>
                    <div>
                        <h2 className='log pt-1'>LA MONTAÑITA</h2>
                    </div>
                    <li>
                        <NavLink className='raya' to= '/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='raya' to='/chocolate'>Chocolate</NavLink>
                    </li>
                    <li>
                        <NavLink className='raya' to='escuela'>Escuela</NavLink>
                    </li>
                    <li>
                        <NavLink  className='raya' to='contactanos'>Contactanos</NavLink>
                    </li>
                    
                </ul>
            </nav>
        )
    }
}
