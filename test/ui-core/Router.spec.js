import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';

import Router from '../../src/ui-core/Router';
import Header from '../../src/ui-core/components/Header';
import Landing from '../../src/ui-core/components/Landing';

describe('Router', () => {
    let wrapper, router;

    beforeEach(() => {
        wrapper = shallow(<Router />);
    });

    it('should include a header', () => {
        expect(wrapper.find(Header)).lengthOf(1);
    });

    it('should include a landing page', () => {
        const landing = wrapper.childAt(1);

        expect(landing.prop('path')).eql('/');
        expect(landing.prop('component')).eql(Landing);
    })
});