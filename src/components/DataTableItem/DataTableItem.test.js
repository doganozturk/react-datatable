import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DataTableItem from './';

describe(DataTableItem, () => {
  const mockItem = {
    ID: 72,
    Phone: '(134) 258-4612',
    City: 'Kukatpalle',
    Name: 'Morgan',
    children: [
      {
        ID: 82,
        Phone: '(770) 741-5391',
        City: 'San Giuliano di Puglia',
        Name: 'Burke',
        children: []
      }
    ]
  };
  const mockDeleteItem = jest.fn();
  const component = shallow(
    <DataTableItem
      id={mockItem.ID}
      item={mockItem}
      deleteItem={mockDeleteItem}
    />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <DataTableItem
        id={mockItem.ID}
        item={mockItem}
        deleteItem={mockDeleteItem}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls the passed in deleteItem function when the delete button is clicked', () => {
    component.find('span.data-table-item__remove').simulate('click');
    expect(mockDeleteItem).toBeCalled();
  });

  it('toggles the visibility of the item when toggle button is clicked', () => {
    component.find('span.data-table-item__toggle').simulate('click');
    expect(component.state('visible')).toEqual(true);
    component.find('span.data-table-item__toggle').simulate('click');
    expect(component.state('visible')).toEqual(false);
  });
});
