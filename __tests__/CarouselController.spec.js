import React from 'react';
import {shallow, mount} from 'enzyme';
import {CarouselController} from '../components/carousel/carouselController/CarouselController';
import {findByTestAttr} from '../testUtils';

const defaultProps = {
  styles: {
    inidicatorContainer: {},
  },
  images: [],
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

describe('Test CarouselController Entry point', function () {
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
    const carouselControllerComponent = findByTestAttr(
      wrapper,
      'carousel-controller',
    );
    expect(carouselControllerComponent).toHaveLength(1);
  });
});
