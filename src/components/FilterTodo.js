import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

// components are "dumb" react components that are not aware of redux
// they receive data from their parents through regular react props
// they are allowed to have local component state and view logic
// use them to avoid having view logic & local component state in "smart" components
export default class FilterTodo extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">{_.map(this.props.filters, this.renderFilter)}</div>
      </div>
    );
  }

  renderFilter(filter) {
    return (<a onClick={() => this.onFilterClick(filter.id)} key={filter.id}>{filter.name}</a>);
  }

  onFilterClick(id) {
    // if (id === this.props.selected) return;
    if (typeof this.props.onFilterClick === 'function') {
      this.props.onFilterClick(id);
    }
  }
}
