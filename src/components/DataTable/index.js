import React, { Component } from 'react';
import items from '../../data/data.json';
import './DataTable.css';
import DataTableItem from '../DataTableItem';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.listToTree(items)
    };
  }

  listToTree(data, { idKey, parentKey, childrenKey } = {}) {
    const ID_KEY = idKey || 'ID';
    const PARENT_KEY = parentKey || 'parentID';
    const CHILDREN_KEY = childrenKey || 'children';

    const tree = [];
    const childrenOf = {};

    let item;
    let id;
    let parentId;

    for (let i = 0, length = data.length; i < length; i++) {
      item = data[i];
      id = item[ID_KEY];
      parentId = item[PARENT_KEY] || 0;
      // every item may have children
      childrenOf[id] = childrenOf[id] || [];
      // init its children
      item[CHILDREN_KEY] = childrenOf[id];

      if (parentId !== 0) {
        // init its parent's children object
        childrenOf[parentId] = childrenOf[parentId] || [];
        // push it into its parent's children object
        childrenOf[parentId].push(item);
      } else {
        tree.push(item);
      }
    }
    console.log(tree);
    return tree;
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
