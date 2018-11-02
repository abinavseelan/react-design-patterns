import React from 'react';

import { Link } from 'react-router-dom';

const ToC = () => {
    return (
        <React.Fragment>
            <div>
                <h3>
                    Compound Components
                </h3>
                <Link to="/compound-components">Final Version</Link>
                &nbsp;
                <Link to="/compound-components/demo">Demo</Link>
                &nbsp;
            </div>
            <div>
                <h3>
                    Flexible Compound Components
                </h3>
                <Link to="/flexible-compound-components">Final Version</Link>
                &nbsp;
                <Link to="/flexible-compound-components/demo">Demo</Link>
                &nbsp;
            </div>
            <div>
                <h3>
                    Render Props
                </h3>
                <Link to="/render-props">Final Version</Link>
                &nbsp;
                <Link to="/render-props/demo">Demo</Link>
                &nbsp;
            </div>
            <div>
                <h3>
                    Prop Collections
                </h3>
                <Link to="/prop-collections">Final Version</Link>
                &nbsp;
                <Link to="/prop-collections/demo">Demo</Link>
                &nbsp;
            </div>
            <div>
                <h3>
                    Prop Getters
                </h3>
                <Link to="/prop-getters">Final Version</Link>
                &nbsp;
                <Link to="/prop-getters/demo">Demo</Link>
                &nbsp;
            </div>
        </React.Fragment>
    )
}

export default ToC;