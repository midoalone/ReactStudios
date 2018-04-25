import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/HomeScreen.scss';
import SQLBuilder from "../Studios/SQLBuilder/index";

class HomeScreen extends Component {

    render() {
        return (
            <SQLBuilder />
        );
    }
}

export default connect(null, null)(HomeScreen);
