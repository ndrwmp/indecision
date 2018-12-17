class VisibleToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            hidden: true
        };
    }

    render() {
        // render
        return  (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.hidden ? 'Show details' : 'Hide details'}</button>
                {!this.state.hidden && (
                    <p>DETAILS!!!!!</p>
                )}
            </div>
        );
    }

    handleVisibilityToggle() {
        this.setState( (prevState) => {
            return {
                hidden: !prevState.hidden
            };
        });
    }
}

ReactDOM.render(<VisibleToggle />, document.getElementById("app"));

// const appRoot = document.getElementById('app');

// let hidden = true;

// console.log("connected");

// const onVisibilityToggle = () => {
//     hidden = !hidden;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="toggle_button" onClick={onVisibilityToggle}>{hidden ? 'Show details' : 'Hide details'}</button>
//             {/* <p hidden={hidden}>these are some details</p> */}
//             {hidden && (
//                 <p>these are some details</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// render();