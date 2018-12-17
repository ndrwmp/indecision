import React from 'react';

// export default (props) => { // good but messes up React devtools, making each <Option>
// tag show as an <Unknown> tag instead, so we'll stick with the inefficient way
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            // can't just do props.handleDeleteOption, because then it'll
            // automatically send the event object in, instead of props.optionText
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export default Option;