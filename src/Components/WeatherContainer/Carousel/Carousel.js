import React from 'react';
import {connect} from 'react-redux';
import './Style.scss';

import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ItemsCarousel from 'react-items-carousel';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import {
    setActiveItemIndexAct,
    setSelectedItemAct
} from '../../../redux/actions';

import {
    getForecastSlc,
    getActiveItemIndexSlc
} from '../../../redux/selectors';

class Carousel extends React.Component {
    constructor() {
        super();

        this.handleCardSelection = this.handleCardSelection.bind(this);
    }

    handleCardSelection = item => {
        const {
            setSelectedItemAct
        } = this.props;

        setSelectedItemAct(item);
    };

    setActiveItemIndex = index => {
        const {
            setActiveItemIndexAct
        } = this.props;

        setActiveItemIndexAct(index);
    };

    //grouping all data by day
    getCardsByDay = () => {
        const {
            getForecastSlc
        } = this.props;

        let byDay = [];
        let temp;

        let groupDay = value => {
            let d = new Date(value['dt_txt']);
            d = Math.floor(d.getDate());

            //check if new month starts, add those days to the end of the array
            if(d < byDay.length - 1) {
                if(d !== temp) {
                    byDay[byDay.length-1+d] = byDay[byDay.length-1+d] || [];
                }
                byDay[byDay.length-1].push(value);
            } else {
                byDay[d] = byDay[d] || [];
                byDay[d].push(value);
            }
            temp = d;
        };

        getForecastSlc.map(groupDay);

        return byDay.filter(function (el) {
            return el !== [];
        });
    };

    renderCards = () => {
        const {
            getActiveItemIndexSlc
        } = this.props;

        let sortedCasts = this.getCardsByDay();
        let months = ["Jan", "Feb", "Mar", "Apr", "May",
            "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

        const items = [];

        if (sortedCasts) {
            sortedCasts.forEach((element, index) => {
                let tempSum = element.reduce( ( total, element ) => total + element.main.temp, 0 );
                let humSum = element.reduce( ( total, element ) => total + element.main.humidity, 0 );
                let avgTemp = tempSum / element.length;
                let avgHum = humSum / element.length;
                avgTemp = (avgTemp - 273.15) * 9/5 + 32;
                let d = new Date(element[0].dt_txt);
                let year = d.getFullYear();
                let month = d.getMonth();
                let day = d.getDate();
                items.push(
                    <Card
                          key={index}
                          className="itemPosition"
                          onClick={() => this.handleCardSelection(element)}
                    >
                        <div className="cardInfo">
                            <p>
                                {day} {months[month]} {year}
                            </p>
                            <Typography variant="h5" component="h2">
                                Average Temp
                                <p>{avgTemp.toFixed(2)} F </p>
                            </Typography>
                            <p>
                                Average humidity {avgHum.toFixed(2)}%
                            </p>
                        </div>
                    </Card>
                );
            });
        }

        return (
            <ItemsCarousel
                requestToChangeActive={(e) => this.setActiveItemIndex(e)}
                activeItemIndex={getActiveItemIndexSlc}
                numberOfCards={3}
                gutter={12}
                leftChevron={<Fab color="primary"><ChevronLeftIcon/></Fab>}
                rightChevron={<Fab color="primary"><ChevronRightIcon/></Fab>}
                outsideChevron
                chevronWidth={60}
                infiniteLoop={false}
                activePosition={'center'}
                slidesToScroll={1}
            >
                {items}

            </ItemsCarousel>
        );
    };

    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    getForecastSlc: getForecastSlc(state),
    getActiveItemIndexSlc: getActiveItemIndexSlc(state)
});
const mapDispatchToProps = {
    setActiveItemIndexAct,
    setSelectedItemAct
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Carousel);
