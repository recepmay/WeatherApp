import React from 'react';
import {connect} from 'react-redux';
import './Style.scss';

import Typography from '@material-ui/core/Typography';

import {

} from '../../../redux/actions';

import {
    getCitySlc
} from '../../../redux/selectors';

class Location extends React.Component {
    constructor() {
        super();
    }

    renderLocationName = () => {
        const {
            getCitySlc
        } = this.props;

        return (
            <Typography variant="h4" component="h2">
                {getCitySlc.name} Weather Forecast
            </Typography>
        );
    };

    render() {
        return (
            <div className="locationPosition">
                {this.renderLocationName()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getCitySlc: getCitySlc(state)
});
const mapDispatchToProps = {

};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);