// import react
import React from 'react';

// import components
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // class properties (thanks to babel transform-class-properties plugin)

    state = {
        options: [],
        selectedOption: undefined
    };

    handleClearSelectedOption = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    };

    // can't manipulate the options array from the Action class
    // so we must define the deleteOptions function here,
    // where options is defined, and then pass this function
    // down to the Action class as a prop. Action class can then
    // call this function (which is inside the IndecisionApp class
    // and not the Action class) to manipulate the options array
    handleDeleteOptions = () => {
        // this.setState( () => {
        //     return {
        //         options: []
        //     };
        // });
        // this will call componentDidUpdate() which will update localStorage
        this.setState(() => ({ options: [] })); 
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleAddOption = (option) => {
        // validate input
        // if the option is empty, send a message
        // if the option is already in the list, don't add it
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Enter option not already included in list.';
        }

        // otherwise, add the option to the list
        // don't use push on the prevState.options because then
        // you'll be manipulating the prevState, which isn't 
        // generally a good idea
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        })); 
    };

    handlePick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    // lifecycle methods - only in class-based components
    componentDidMount() {
        // if the JSON data is invalid, catch the error the
        // attempted parse of the invalid data will throw
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            
            // if options is populated, set the state
            if (options)
                this.setState(() => ({ options: options }));
        } catch (e) {
            console.log("JSON data invalid");
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        // only save if the options array changed
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("component willl unmount");
    }

    render() {
        const subtitle = "Put your life in the hands of a computer.";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="options">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}