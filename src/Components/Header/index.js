import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import Menu, {SubMenu, Item as MenuItem, Divider} from "rc-menu"
import NewModal from '../NewModal'
import StudioRedux from '../../Redux/StudioRedux'

import 'rc-menu/assets/index.css'
import './style.scss'

class Header extends Component {

    state = {
        newModalShow: false
    }

    constructor (props) {
        super(props)

        props.updateAvailableStudios([
            { title: 'SQL Builder', component: '' },
            { title: 'CSS Builder', component: '' },
            { title: 'Layout Builder', component: '' },
            { title: 'HTML Builder', component: '' },
            { title: 'Unit Builder', component: '' },
        ])
    }

    componentDidMount() {

    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bb-studios-nav">

                <NewModal show={this.state.newModalShow} close={() => {
                    this.setState({ newModalShow: false })
                }} />

                <Link className="bb-header-logo" to="/">
                    <i className="bb-header-icons bb-studios-logo"/>
                </Link>

                <Menu mode='horizontal' onClick={() => {
                    this.setState({ newModalShow: true })
                }}>
                    <SubMenu title={<span><i className="bb-header-icons bb-icon-folder"/> File</span>}>
                        <SubMenu title={<span>New</span>}>
                            {this.props.studios.map((studio, index) => (
                                <MenuItem key={index}>{studio.title}</MenuItem>
                            ))}
                        </SubMenu>
                        <MenuItem>Open</MenuItem>
                        <MenuItem>Save</MenuItem>
                        <MenuItem>Save As</MenuItem>
                    </SubMenu>
                </Menu>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8" />
                            <div className="col-4">
                                <ul className="navbar-nav float-right">
                                    <li className="nav-item user-item">
                                        <a className="nav-link" onClick={this.toggleModal}>Account Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    let studios = []
    if(state.studio.data) studios = state.studio.data.data
    return {
        studios: studios,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAvailableStudios: (data) => {
            dispatch(StudioRedux.availableStudios(data))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
