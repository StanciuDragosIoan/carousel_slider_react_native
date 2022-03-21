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

describe('Test Carousel component', function () {
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
    const carouselComponent = findByTestAttr(wrapper, 'carousel-component');
    expect(carouselComponent).toHaveLength(1);
  });

  it('should render the CarouselItem component X3 times (renders only 3 out of all items at a time)', () => {
    wrapper = mount(<Carousel />);
    const carouselItemComponent = findByTestAttr(wrapper, 'carousel-item');
    expect(carouselItemComponent.length).toBe(3);
  });

  it('should render the CarouselController component', () => {
    wrapper = mount(<Carousel />);
    const carouselItemComponent = findByTestAttr(
      wrapper,
      'carousel-controller',
    );
    expect(carouselItemComponent.length).toBeGreaterThan(0);
  });
});
