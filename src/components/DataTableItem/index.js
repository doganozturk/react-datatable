import React, { Component } from 'react';
import './DataTableItem.css';

class DataTableItem extends Component {
  render() {
    return (
      <tr className="DataTableItem">
        <td>
          {this.props.item.ID}
        </td>
        <td>
          {this.props.item.parentID}
        </td>
        <td>
          {this.props.item.Phone}
        </td>
        <td>
          {this.props.item.City}
        </td>
        <td>
          {this.props.item.Name}
        </td>
      </tr>
    );
  }
}

export default DataTableItem;
