import React from 'react';
import {shallow, mount} from 'enzyme';
import {KeyboardAnimationSample} from '../components/keyboardAnimationSample/KeyboardAnimationSample';
import {findByTestAttr} from '../testUtils';

/**
 * Factory function to create a ShallowWrapper for the Carousel component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<KeyboardAnimationSample />);
  return wrapper;
};

describe('Test KeyboardAnimationSample component', function () {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should render without error', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render the Carousel component without error', () => {
    const carouselComponent = findByTestAttr(wrapper, 'keyboard-avoid-comp');
    expect(carouselComponent).toHaveLength(1);
  });
});
