import React, { Component } from 'react';
import autoBind from 'react-autobind';

// components are "dumb" react components that are not aware of redux
// they receive data from their parents through regular react props
// they are allowed to have local component state and view logic
// use them to avoid having view logic & local component state in "smart" components
export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <form onSubmit={e => { this.onSubmit(e, this.props.text) }}>
                        <input value={this.props.text} type="text" onChange={e => this.updateInputValue(e)} />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>
            </div>
        );
    }


    onSubmit(e, text) {
        if (!text) return;
        if (typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(text);
        }
        event.preventDefaults();
        return false;
    }

    updateInputValue(event) {
        if (typeof this.props.updateInputValue === 'function') {
            this.props.updateInputValue(event.target.value);
        }
    }

}
