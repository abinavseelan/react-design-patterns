import React from 'react';

const dateToDateString = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
}

class Calendar extends React.Component {
    state = {}

    onChange = (e) => {
        const dateString = e.target.value;
        const dateArray = dateString.split('-');

        this.props.onChange(new Date(dateArray[0], dateArray[1] - 1, dateArray[2]));
    }

    reset = () => {}

    render() {
        return (
            <input type="date" value={dateToDateString(this.props.initialValue)} onChange={this.onChange}/>
        );
    }
}

export default Calendar;