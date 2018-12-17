// converted Action class-based component to a stateless functional component
// faster than class-based components because they don't have 
// as much overhead as classes, esp. those that extend
// React.Component
// if we have a class-based component that only uses its
// render() function, it's a good idea to put it into a
// stateless functional component
// it's actually really easy to convert a class-based component to a
// stateless functional component (SFC)
import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

export default Action;

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