import React from 'react';

const AnalyticsProps = {
    'data-application': 'SED',
    'data-source': 'Analytics Component',
    onClick(e) {
        const { target } = e;
        console.log(`Clicked ${target.name}. (${target.dataset.application} - ${target.dataset.source})`)
    }
}

class Analytics extends React.Component {
    render() {
        return this.props.children(AnalyticsProps);
    }
}

export default Analytics;