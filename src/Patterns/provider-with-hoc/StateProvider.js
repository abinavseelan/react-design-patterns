import React from 'react';

export const Context = React.createContext();

const StateProvider = (Component, state) => {
    return (props) => (
        <Context.Provider value={state}>
            <Component {...props} />
        </Context.Provider>
    )
}

export default StateProvider;