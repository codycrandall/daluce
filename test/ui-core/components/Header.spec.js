import React from 'react';
import { mount } from 'enzyme';
import Header from 'Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('<Header/>', () => {
    let header, wrapper;

    beforeEach(() => {
        wrapper = mount(<Header />);
        header = wrapper.childAt(0);
    });

    after(() => {
        wrapper.unmount();
    });

    it('should render a menu icon first', () => {
        const menuIcon = header.childAt(0)
        expect(menuIcon.type()).eql(FontAwesomeIcon);
    });
});