import React from 'react';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import App from 'Src/App';
import Router from '../../src/ui-core/Router';
describe('<App/>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<MemoryRouter><App /></MemoryRouter>);
	});

	after(() => {
		wrapper.unmount();
	});

	it('should render a Router and pass the player hook', () => {
		const router = wrapper.find(Router);
		expect(router).lengthOf(1);
	});
});