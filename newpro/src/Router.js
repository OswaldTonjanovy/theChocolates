import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-bootstrap';
import { Chocolates } from './Chocolates';
import { ErrorPage } from './ErrorPage';
import { School } from './School';
import { Contactanos } from './Contactanos';
import { Home } from './Home';
import { Header } from './Header';


export class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
            <Header />

                <Switch>
                    <Route exact path='/' ClassName='active' component={Home}/>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/chocolate' component={Chocolates} />
                    <Route exact path='/escuela' component={School} />
                    <Route exact path='/contactanos' component={Contactanos} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        );
    }
};

