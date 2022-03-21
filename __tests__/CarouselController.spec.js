import React from 'react';
import {shallow} from 'enzyme';
import {CarouselController} from '../components/carousel/carouselController/CarouselController';
import {findByTestAttr} from '../testUtils';

const defaultProps = {
  styles: {
    inidicatorContainer: {},
  },
  images: [],
  scrollHandler: jest.fn(),
};
/**
 * Factory function to create a ShallowWrapper for the CarouselController component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<CarouselController {...defaultProps} />);
  return wrapper;
};

describe('Test CarouselController point', function () {
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

  it('should render the CarouselController without error', () => {
    const carouselControllerComponent = findByTestAttr(
      wrapper,
      'carousel-controller',
    );
    expect(carouselControllerComponent).toHaveLength(1);
  });
});
