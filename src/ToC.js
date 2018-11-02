import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

const ToC = () => {
    return (
        <div className="container">
            <div>
                <div className="toc-container">
                    <h3>
                        Compound Components
                    </h3>
                    <Link to="/compound-components">Final Version</Link>
                    <Link to="/compound-components/demo">Demo</Link>
                </div>
                <div className="toc-container">
                    <h3>
                        Flexible Compound Components
                    </h3>
                    <Link to="/flexible-compound-components">Final Version</Link>
                    <Link to="/flexible-compound-components/demo">Demo</Link>
                </div>
                <div className="toc-container">
                    <h3>
                        Render Props
                    </h3>
                    <Link to="/render-props">Final Version</Link>
                    <Link to="/render-props/demo">Demo</Link>
                </div>
                <div className="toc-container">
                    <h3>
                        Prop Collections
                    </h3>
                    <Link to="/prop-collections">Final Version</Link>
                    <Link to="/prop-collections/demo">Demo</Link>
                </div>
                <div className="toc-container">
                    <h3>
                        Prop Getters
                    </h3>
                    <Link to="/prop-getters">Final Version</Link>
                    <Link to="/prop-getters/demo">Demo</Link>
                </div>
                <div className="toc-container">
                    <h3>
                        State Initializers
                    </h3>
                    <Link to="/state-initializers">Final Version</Link>
                    <Link to="/state-initializers/demo">Demo</Link>
                </div>
                <div className="toc-container">
                    <h3>
                        State Reducers
                    </h3>
                    <Link to="/state-reducers">Final Version</Link>
                    <Link to="/state-reducers/demo">Demo</Link>
                </div>
            </div>
        </div>
    )
}

export default ToC;