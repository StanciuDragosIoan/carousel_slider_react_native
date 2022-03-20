import React from 'react';
import {shallow, mount} from 'enzyme';
import {Carousel} from '../components/carousel/Carousel';
import {findByTestAttr} from '../testUtils';

/**
 * Factory function to create a ShallowWrapper for the Carousel component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<Carousel />);
  return wrapper;
};

describe('Test Carousel Entry point', function () {
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

  it('should render the main App component without error', () => {
    const carouselComponent = findByTestAttr(wrapper, 'carousel-component');
    expect(carouselComponent).toHaveLength(1);
  });
});
