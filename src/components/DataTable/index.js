import React, { Component } from 'react';
import items from '../../data/data.json';
import './DataTable.css';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items
    };
  }

  renderItems() {
    return this.state.items.map(item =>
      <tr key={item.ID}>
        <td>
          {item.ID}
        </td>
        <td>
          {item.parentID}
        </td>
        <td>
          {item.Phone}
        </td>
        <td>
          {item.City}
        </td>
        <td>
          {item.Name}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="DataTable">
        <h1>Fixed Table header</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
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
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
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
