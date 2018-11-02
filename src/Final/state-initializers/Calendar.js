import React from 'react';

const dateToDateString = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
}

class Calendar extends React.Component {
    state = {
        value: dateToDateString(this.props.initialValue) || dateToDateString(new Date())
    }

    onChange = (e) => {
        const dateString = e.target.value;
        const dateArray = dateString.split('-');

        this.setState({
            value: dateString,
        }, () => {
            this.props.onChange(new Date(dateArray[0], dateArray[1] - 1, dateArray[2]));
        })
    }

    reset = () => {
        this.setState({
            value: dateToDateString(this.props.initialValue) || dateToDateString(new Date())
        })
    }

    render() {
        return (
            this.props.children(this.state.value, this.onChange, this.reset)
        );
    }
}

export default Calendar;