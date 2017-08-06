import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DataTable from './';
import DataTableItem from '../DataTableItem';

describe(DataTable, () => {
  const component = shallow(<DataTable />);

  it('renders and matches our snapshot', () => {
    const component = renderer.create(<DataTable />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the same number of DataTableItem components as items', () => {
    const dataTableItems = component.find(DataTableItem).length;
    const items = component.state('items').length;
    expect(dataTableItems).toEqual(items);
  });

  it('removes an item from items when deleteItem function is called', () => {
    const before = component.find(DataTableItem).length;
    component.instance().deleteItem(1);
    const after = component.find(DataTableItem).length;
    expect(before).toBeGreaterThan(after);
  });
});
