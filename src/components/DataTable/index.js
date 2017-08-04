import React, { Component } from 'react';
import items from '../../data/data.json';
import './DataTable.css';
import DataTableItem from '../DataTableItem';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items
    };
  }

  renderItems() {
    return this.state.items.map(item =>
      <DataTableItem item={item} key={item.ID} />
    );
  }

  render() {
    return (
      <div className="DataTable">
        <h1>Fixed Table header</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Parent ID</th>
                <th>Phone</th>
                <th>City</th>
                <th>Name</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              {this.renderItems()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DataTable;
