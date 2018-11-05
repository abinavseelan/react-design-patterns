import React from 'react';

import SubmittableInput from './SubmittableInput';

class App extends React.Component {
    textReducer = (state, changes) => {
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

    minMaxReducer = (state, changes) => {
        if (changes.value > 30) {
            return {
                ...state,
                value: 30,
            }
        }

        if (changes.value < 0) {
            return {
                ...state,
                value: 10,
            }
        }

        return {
            ...state,
            value: changes.value,
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Type a competitor!</h2>
                    <SubmittableInput reducer={this.textReducer} type="text" onSubmit={() => {}} />
                </div>

                <div>
                    <h2>Impose a min/max</h2>
                    <SubmittableInput reducer={this.minMaxReducer} type="number" onSubmit={() => {}} />
                </div>
            </div>
        );
    }
}

export default App;