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
          <div className="data-table-item__info">
            <div>
              <strong>ID: </strong>
              <span>
                {item.ID}
              </span>
            </div>
            {(item.parentID && item.parentID !== 0 ? true : false) &&
              <div>
                <strong>parentID: </strong>
                <span>
                  {item.parentID}
                </span>
              </div>}
            <div>
              <strong>Name: </strong>
              <span>
                {item.Name}
              </span>
            </div>
            <div>
              <strong>City: </strong>
              <span>
                {item.City}
              </span>
            </div>
            <div>
              <strong>Phone: </strong>
              <span>
                {item.Phone}
              </span>
            </div>
          </div>
          <span
            className="data-table-item__remove"
            onClick={() => {
              this.deleteItem(item.ID);
            }}
          >
            x
          </span>
          {children &&
            <div
              className={
                this.state.visible
                  ? 'data-table-item__children data-table-item__children--visible'
                  : 'data-table-item__children'
              }
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
