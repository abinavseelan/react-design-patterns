import React from 'react';

import { Context } from './StateProvider';

class Child extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {
                    (context) => (
                        <h1>{context.title}</h1>
                    )
                }
            </Context.Consumer>
        );
    }
}

export default Child;