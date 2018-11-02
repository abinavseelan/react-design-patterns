import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

const ToC = () => {
    return (
        <div className="container">
            <div>
                <div className="toc-container">
                    <Link to="/hoc">Higher Order Components</Link>
                </div>

                <div className="toc-container">
                    <Link to="/provider">Provider</Link>
                </div>

                <div className="toc-container">
                    <Link to="/provider-with-hoc">Provider With HoC</Link>
                </div>

                <div className="toc-container">
                    <Link to="/compound-components">Compound Components</Link>
                </div>

                <div className="toc-container">
                    <Link to="/flexible-compound-components">Flexible Compound Components</Link>
                </div>

                <div className="toc-container">
                    <Link to="/render-props">Render Props</Link>
                </div>

                <div className="toc-container">
                    <Link to="/prop-collections">Prop Collections</Link>
                </div>

                <div className="toc-container">
                    <Link to="/prop-getters">Prop Getters</Link>
                </div>

                <div className="toc-container">
                    <Link to="/state-initializers">State Initializers</Link>
                </div>

                <div className="toc-container">
                    <Link to="/state-reducers">State Reducers</Link>
                </div>
            </div>
        </div>
    )
}

export default ToC;