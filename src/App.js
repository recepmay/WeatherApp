import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Footer from './Components/Footer/Footer';
import ChatContainer from './Components/WeatherContainer/WeatherContainer';

import {
} from './redux/selectors';

import {
} from './redux/actions';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <ChatContainer/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);