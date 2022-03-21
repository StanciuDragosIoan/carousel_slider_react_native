import React from 'react';
import {shallow, mount} from 'enzyme';
import {CarouselItem} from '../components/carousel/carouselItem/CarouselItem';
import {findByTestAttr} from '../testUtils';
import {render} from '@testing-library/react-native';
import {ITERATOR_SYMBOL} from 'enzyme/build/Utils';

const defaultProps = {
  images: [],
};
/**
 * Factory function to create a ShallowWrapper for the CarouselItem component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const wrapper = shallow(<CarouselItem {...defaultProps} />);
  return wrapper;
};

describe('Test CarouselItem  component', function () {
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

  it('should render the CarouselItem component without error', () => {
    const carouselItemComponent = findByTestAttr(wrapper, 'carousel-item');
    expect(carouselItemComponent).toHaveLength(1);
  });
});
