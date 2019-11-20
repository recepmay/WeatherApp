import React from 'react';
import {connect} from 'react-redux';
import './Style.scss';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
    setTemperatureAct
} from '../../../redux/actions';

import {
    getTemperatureSlc
} from '../../../redux/selectors';

class TempOptions extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        const {
            setTemperatureAct
        } = this.props;

        setTemperatureAct(name);
    };

    renderCheckboxes = () => {
        const {
            getTemperatureSlc
        } = this.props;

        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={getTemperatureSlc === 'Celcius'}
                            onChange={this.handleChange('Celcius')}
                            color="primary"
                        />
                    }
                    label="Celcius"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={getTemperatureSlc === 'Fahrenheit'}
                            onChange={this.handleChange('Fahrenheit')}
                            color="primary"
                        />
                    }
                    label="Fahrenheit"
                />
            </FormGroup>
        );
    };

    render() {
        return (
            <div>
                {this.renderCheckboxes()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getTemperatureSlc: getTemperatureSlc(state)
});
const mapDispatchToProps = {
    setTemperatureAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TempOptions);
