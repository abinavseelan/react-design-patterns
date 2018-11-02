import React from 'react';
import Translate from './Translate';

class Title extends React.Component {
    render() {
        return (
            <h1>
                {this.props.t('title')}
            </h1>
        )
    }
}

export default Translate('en')(Title);