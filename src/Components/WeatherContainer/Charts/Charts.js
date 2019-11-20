import React from 'react';
import {connect} from 'react-redux';
import './Style.scss';

import Chart from 'react-google-charts';
import TempOptions from '../TempOptions/TempOptions';

import {

} from '../../../redux/actions';

import {
    getSelectedItemSlc,
    getTemperatureSlc
} from '../../../redux/selectors';

class Charts extends React.Component {
    constructor() {
        super();
    }

    renderBarChart = () => {
        const {
            getSelectedItemSlc,
            getTemperatureSlc
        } = this.props;

        let data = [];
        data.push(['Hours', 'Maximum', 'Minimum']);

        //populating data array with hour, max and min temp values
        getSelectedItemSlc.map(item => {
            let d = new Date(item.dt_txt);
            let buffer = d.getHours() < 10 ? "0" : "";
            let hour = buffer + d.getHours() + ":" + d.getMinutes() +"0";
            let max = item.main.temp_max;
            let min = item.main.temp_min;
            if(getTemperatureSlc === 'Fahrenheit') {
                max = (max - 273.15) * 9/5 + 32;
                min = (min - 273.15) * 9/5 + 32;
            } else {
                max = max - 273.15;
                min = min - 273.15;
            }
            data.push([hour, parseFloat(max.toFixed(2)), parseFloat(min.toFixed(2))]);
        });

        console.log(data);

        if(getSelectedItemSlc.length === 0) {
            return (
                <div>
                    <p> Please select a card to check temperature details!</p>
                </div>
            );
        } else {
            return (
                <div>
                    <TempOptions/>
                    <Chart
                        width={'100%'}
                        height={'500px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={data}
                        options={{
                            title: 'Population of Largest U.S. Cities',
                            chart: {
                                title: 'Weather Information for Munich',
                                subtitle: 'Temperature is shown for every 3 hours'
                            }
                        }}
                    />
                </div>
            );
        }
    };

    render() {
        return (
            <div className="chartPosition">
                {this.renderBarChart()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getSelectedItemSlc: getSelectedItemSlc(state),
    getTemperatureSlc: getTemperatureSlc(state)
});
const mapDispatchToProps = {

};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Charts);