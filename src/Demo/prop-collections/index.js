import React from 'react';

import Analytics from './Analytics';

class App extends React.Component {
    render() {
        return (
            <Analytics>
                {
                    () => (
                        <React.Fragment>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="phone
                                    number"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <button
                                    name="submit-button"
                                >
                                    Submit
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }
            </Analytics>
        )
    }
};

export default App;