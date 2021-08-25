import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import '@firebase/auth';
import { createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component{
    componentDidMount(){
        // firebase connection is here
        firebase.initializeApp({
        apiKey: 'your_api_key',
        authDomain: 'your_auth_domain'
        projectId: 'your_project_id',
        storageBucket: 'your_bucket',
        messagingSenderId: 'your messagingSenderId',
        appId: 'your_app_id',
        measurementId: 'your_measurementId'
  });
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
        <Provider store={store}>
        <View style ={{flex:1}}>
            <Router/>
        </View>
        </Provider>
    );
}
}
export default Main;