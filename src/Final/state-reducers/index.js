import React from 'react';

import SubmittableInput from './SubmittableInput';

class App extends React.Component {
    inputReducer = (state, changes) => {
        if (['Amazon', 'Snapdeal'].indexOf(changes.value) !== -1) {
            return {
                ...state,
                value: 'Flipkart'
            };
        }

        return {
            ...state,
            value: changes.value
        };
    }

    render() {
        return (
            <SubmittableInput reducer={this.inputReducer} />
        );
    }
}

export default App;