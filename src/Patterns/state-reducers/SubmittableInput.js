import React from 'react';

class SubmittableInput extends React.Component {
    state = {
        value: ''
    }

    onSubmit = () => {
        this.props.onSubmit(this.state);
    }

    onChange = (e) => {
        const { value } = e.target;
        this.setState((prevState) => {
            return this.props.reducer(prevState, {
                value,
            });
        });
    }

    render() {

        return (
            <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.onChange} />
                <button onClick={this.onSubmit}>Submit</button>
            </React.Fragment>
        );
    }
}

export default SubmittableInput;