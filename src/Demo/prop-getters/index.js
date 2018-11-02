import React from 'react';

import Analytics from './Analytics';

class App extends React.Component {
    render() {
        return (
            <Analytics>
            {
                (analyticsProps) => (
                    <React.Fragment>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                {...analyticsProps}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="phone
                                number"
                                placeholder="Phone Number"
                                {...analyticsProps}
                            />
                        </div>
                        <div>
                            <button
                                name="submit-button"
                                {...analyticsProps}
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