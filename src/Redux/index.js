import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../Sagas';

export default () => {
    const rootReducer = combineReducers({
        test: require('./TestRedux').reducer,
        studio: require('./StudioRedux').reducer,
        router: routerReducer
    });

    const middlewares = [];

    const logger = createLogger({
        collapsed: true,
        diff: true
    });

    middlewares.push(logger);

    const history = createHistory();
    middlewares.push(routerMiddleware(history));

    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    );

    const store = createStore(rootReducer, enhancer);

    sagas.forEach((saga) => sagaMiddleware.run(saga));

    return {store, history};
};
