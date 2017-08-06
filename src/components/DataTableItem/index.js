import React, { Component } from 'react';

class DataTableItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggle = this.toggle.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  deleteItem(id) {
    this.props.deleteItem(id);
  }

  render() {
    const item = this.props.item;

    let children;

    if (item.children.length) {
      children = item.children.map(child => {
        return (
          <DataTableItem
            key={child.ID}
            id={child.ID}
            item={child}
            deleteItem={this.deleteItem}
          />
        );
      });
    }

    return (
      <ul className="data-table-item">
        <li>
          {children &&
            <span className="data-table-item__toggle" onClick={this.toggle}>
              {this.state.visible ? '-' : '+'}
            </span>}
          <span>
            {item.ID}
          </span>
          <span>
            {item.Phone}
          </span>
          <span>
            {item.City}
          </span>
          <span>
            {item.Name}
          </span>
          <span
            className="data-table-item__remove"
            onClick={() => {
              this.deleteItem(item.ID);
            }}
          >
            [ delete ]
          </span>
          {children &&
            <div
              className="data-table-item__children"
              style={
                this.state.visible ? { display: 'block' } : { display: 'none' }
              }
            >
              {children}
            </div>}
        </li>
      </ul>
    );
  }
}

export default DataTableItem;
