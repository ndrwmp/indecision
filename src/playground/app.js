class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

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

    // other methods

    // can't manipulate the options array from the Action class
    // so we must define the deleteOptions function here,
    // where options is defined, and then pass this function
    // down to the Action class as a prop. Action class can then
    // call this function (which is inside the IndecisionApp class
    // and not the Action class) to manipulate the options array
    handleDeleteOptions() {
        // this.setState( () => {
        //     return {
        //         options: []
        //     };
        // });
        // this will call componentDidUpdate() which will update localStorage
        this.setState(() => ({ options: [] })); 
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleAddOption(option) {
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
    }

    handlePick() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand];
        alert(option);
    }

    render() {
        const subtitle = "Put your life in the hands of a computer.";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

// set defaultProps after creating the component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {/* only create an h2 for the subtitle if the subtitle exists */}
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision"
};

// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// converted Action class-based component to a stateless functional component
// faster than class-based components because they don't have 
// as much overhead as classes, esp. those that extend
// React.Component
// if we have a class-based component that only uses its
// render() function, it's a good idea to put it into a
// stateless functional component
// it's actually really easy to convert a class-based component to a
// stateless functional component (SFC)
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Add some potions to get started</p>}
            <ol>
                {
                    /*{ this.props.options.map((option) => <li key={option}>{option}</li>) }*/
                    props.options.map((option) =>
                        <Option
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                }
            </ol>
            <button onClick={props.handleDeleteOptions}>remove all</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <li>
                {props.optionText}
                <button 
                    // can't just do props.handleDeleteOption, because then it'll
                    // automatically send the event object in, instead of props.optionText
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                >remove</button>
            </li>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault(); // stop full page refresh
        const option = e.target.elements.option.value.trim(); // grab input value
        const error = this.props.handleAddOption(option); // update list, grab error

        this.setState(() => ({ error }));

        // clear the text input
        if (!error)
            e.target.elements.option.value = "";
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

// stateless functional component
// faster than class-based components because they don't have 
// as much overhead as classes, esp. those that extend
// React.Component
// if we have a class-based component that only uses its
// render() function, it's a good idea to put it into a
// stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));