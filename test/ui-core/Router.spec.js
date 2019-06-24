import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';
import Router from '../../src/ui-core/Router';

describe('Router', () => {
    it('should include a switch with routes', () => {
        const wrapper = shallow(<Router />);
        const routerSwitch = wrapper.find(Switch);
        const mainPage = routerSwitch.childAt(0);
        expect(mainPage.prop('exact')).eql(true);

        expect(mainPage.prop('path')).eql('/');
        expect(mainPage.prop('render')).to.be.a('Function');
    });
});