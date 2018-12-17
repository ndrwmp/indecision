import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="options-header">
            <h3 className="options-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="options__message">
                Add some potions to get started
        </p>}
        {
            /*{ this.props.options.map((option) => <li key={option}>{option}</li>) }*/
            props.options.map((option, index) =>
                <Option
                    key={option} 
                    optionText={option} 
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
        }
    </div>
);

export default Options;