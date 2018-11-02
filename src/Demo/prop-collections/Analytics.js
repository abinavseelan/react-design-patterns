import React from 'react';

class Analytics extends React.Component {
    render() {
        return this.props.children();
    }
}

export default Analytics;