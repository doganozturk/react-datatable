import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DataTable from './';

describe(DataTable, () => {
  const component = shallow(<DataTable />);

  it('renders and matches our snapshot', () => {
    const component = renderer.create(<DataTable />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
