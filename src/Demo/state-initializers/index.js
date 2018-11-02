import React from 'react';

import Calendar from './Calendar';

class App extends React.Component {
    handleDateChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Calendar initialValue={new Date()} onChange={this.handleDateChange} />
        )
    }
}

export default App;