import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DataTableItem from './';

describe(DataTableItem, () => {
  const mockItem = {
    ID: 1,
    parentID: 0,
    Phone: '(403) 125-2552',
    City: 'Coevorden',
    Name: 'Grady',
    children: []
  };
  const component = shallow(<DataTableItem item={mockItem} />);

  it('renders and matches our snapshot', () => {
    const component = renderer.create(<DataTableItem item={mockItem} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
