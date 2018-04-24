import React, {Component} from 'react';
import {connect} from 'react-redux';
import TestActions, {getPingFetching, getPingData, getPingError} from '../Redux/TestRedux';
import './styles/HomeScreen.scss';

class HomeScreen extends Component {
    testSaga = () => {
        this.props.ping();
    }

    render() {
        const {fetching, data, error} = this.props;
        return (
            <div>
                <div>Home Screen</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fetching: getPingFetching(state),
    data: getPingData(state),
    error: getPingError(state)
});

const mapDispatchToProps = {
    ping: TestActions.pingRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
