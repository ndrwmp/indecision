import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault(); // stop full page refresh
        const option = e.target.elements.option.value.trim(); // grab input value
        const error = this.props.handleAddOption(option); // update list, grab error

        this.setState(() => ({ error }));

        // clear the text input
        if (!error)
            e.target.elements.option.value = "";
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">submit</button>
                </form>
            </div>
        );
    }
}