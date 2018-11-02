import React from 'react';

import { Context } from './index';

class Component2 extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {
                    (context) => (
                        <input type="text" value={context.value} onChange={(e) => { context.onChange(e.target.value) }} />
                    )
                }
            </Context.Consumer>
        )
    }
}

export default Component2;