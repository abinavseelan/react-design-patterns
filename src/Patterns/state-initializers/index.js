import React from 'react';

import Calendar from './Calendar';

class App extends React.Component {
    handleDateChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Calendar initialValue={new Date()} onChange={this.handleDateChange}>
                {
                    (dateString, onChange, reset) => (
                        <div>
                            <h1>Let's set the date!</h1>
                            <input type="date" onChange={onChange} value={dateString} />
                            <button onClick={reset}>Reset</button>
                        </div>
                    )
                }
            </Calendar>
        )
    }
}

export default App;