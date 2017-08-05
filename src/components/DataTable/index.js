import React, { Component } from 'react';
import DataTableItem from '../DataTableItem';
import items from '../../data/data.json';
import { listToTree } from '../../lib/utils';
import deepFilter from 'deep-filter';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: listToTree(items)
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.setState({
      items: deepFilter(this.state.items, item => item.ID !== id)
    });
  }

  render() {
    return (
      <div className="data-table">
        {this.state.items.map(item =>
          <DataTableItem
            key={item.ID}
            id={item.ID}
            item={item}
            deleteItem={this.deleteItem}
          />
        )}
      </div>
    );
  }
}

export default DataTable;
