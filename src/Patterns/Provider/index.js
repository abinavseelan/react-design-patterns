import React from 'react';

import Component1 from './Component1';

export const Context = React.createContext();

class App extends React.Component {
    state = {
        value: '',
    }

    onChange = (value) => {
        this.setState({
            value,
        }, () => {
            console.log(value);
        });
    }

    render() {
        return (
            <Context.Provider
                value={{
                    value: this.state.value,
                    onChange: this.onChange,
                }}
            >
                <Component1 />
                <pre>{this.state.value}</pre>
            </Context.Provider>
        )
    }
};

export default App;