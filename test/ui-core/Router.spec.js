import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';
import Router from '../../src/ui-core/Router';

describe('Router', () => {
    let wrapper, routerSwitch;

    beforeEach(() => {
        wrapper = shallow(<Router />);
        routerSwitch = wrapper.find(Switch);
    });

    it('should include a switch', () => {
        expect(routerSwitch).lengthOf(1)
    });

    it('should include a header', () => {
        const header = routerSwitch.childAt(0);

        expect(header.prop('path')).eql('/');
        expect(header.prop('render')).to.be.a('Function');
    });
});