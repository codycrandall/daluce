import React from 'react';
import { mount } from 'enzyme';
import Landing from 'Components/Landing';

describe('<Landing/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Landing />);
    });

    after(() => {
        wrapper.unmount();
    });

    it('should render with a background image', () => {
        const backgroundImage = wrapper.childAt(0);

        expect(backgroundImage.type()).eql('img');
    });
});