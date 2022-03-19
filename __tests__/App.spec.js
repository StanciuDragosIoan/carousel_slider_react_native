import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';
import {findByTestAttr} from '../testUtils';

// import {render} from '@testing-library/react-native';

/**
 * Factory function to create a ShallowWrapper for the ClearButton component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe('Test App Entry point', function () {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render without error', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render the main App component without error', () => {
    const mainContainer = findByTestAttr(wrapper, 'main-app-container');
    expect(mainContainer).toHaveLength(1);
  });
});
