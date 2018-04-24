import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Routes from '../Navigation';
import './styles/Root.scss';
import Header from '../Components/Header'

class Root extends Component {
    render() {
        return (
            <div className='d-flex flex-column' style={{flex: 1}}>
                <Header/>

                <div className="studios-tabs">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/query_builder" >Query Builder</NavLink>
                </div>

                <div style={{flex: 1, backgroundColor: '#232529', color: '#fff'}}>
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default withRouter(Root)
