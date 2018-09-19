import React, { Component } from 'react';
import autoBind from 'react-autobind';

// components are "dumb" react components that are not aware of redux
// they receive data from their parents through regular react props
// they are allowed to have local component state and view logic
// use them to avoid having view logic & local component state in "smart" components
export default class ListRow extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    // const backgroundColor = this.props.selected ? "#c0f0ff" : "#fff";
    const rowItem = this.props.rowItem;
    let todoRow;
    if (this.props.visibility === 'all' && !rowItem.completed) {
      todoRow = this.formActiveItemRow(rowItem);
    } else if (this.props.visibility === 'all' && rowItem.completed) {
      todoRow = this.formCompletedItemRow(rowItem);
    } else if (this.props.visibility === 'active' && !rowItem.completed) {
      todoRow = this.formActiveItemRow(rowItem);
    } else if (this.props.visibility === 'completed' && rowItem.completed) {
      todoRow = this.formCompletedItemRow(rowItem);
    }
    return (<span> {todoRow} </span>);
  }

  formActiveItemRow(rowItem) {
    return (
      <label>
        <input type="checkbox" onChange={this.onChange} />
        {rowItem.text}
      </label>
    )
  }

  formCompletedItemRow(rowItem) {
    return (<del>{rowItem.text}</del>);
  }

  onChange() {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(this.props.rowId);
    }
  }
}
