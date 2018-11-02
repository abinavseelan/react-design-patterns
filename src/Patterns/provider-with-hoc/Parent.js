import React from 'react';

import Child from './Child';

import StateProvider from './StateProvider';

class Parent extends React.Component {
    render() {
        return (
            <Child />
        );
    }
}

export default StateProvider(Parent, {
    title: 'Hello World!',
});