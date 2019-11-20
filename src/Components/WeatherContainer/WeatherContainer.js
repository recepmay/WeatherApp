import React from 'react';
import {connect} from 'react-redux';
import './Style.scss';

import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import Carousel from './Carousel/Carousel';
import Location from './Location/Location';
import Charts from './Charts/Charts';

import {
    getForecastAct
} from '../../redux/actions';

import {
    getForecastSlc
} from '../../redux/selectors';

class WeatherContainer extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const {
            getForecastAct
        } = this.props;

        getForecastAct();
    }

    renderContext = () => {
        const {
            getForecastSlc
        } = this.props;

        //adding spinner while fetching forecast data
        return (
            <div>
                {getForecastSlc.length === 0
                    ? <div>
                        <CircularProgress/>
                        <h5>Loading...</h5>
                      </div>
                    : <div>
                        <Location/>
                        <Carousel/>
                        <Charts/>
                      </div>
                }
            </div>
        );
    };

    render() {
        return (
            <div className="mainPage">
                <div className="container">
                    <div className="col-sm-12 cardPosition">
                        <Card>
                            <CardContent className="contentPosition">
                                {this.renderContext()}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getForecastSlc: getForecastSlc(state)
});
const mapDispatchToProps = {
    getForecastAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer);