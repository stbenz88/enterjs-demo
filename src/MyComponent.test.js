import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './MyComponent';

Enzyme.configure({adapter: new Adapter()});

it('componentDidMount should load the message', async () => {
	window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 200, json: () => ({message: 'Hello from the enterJS'})}));
	const myComponent = shallow(<MyComponent />);

	await myComponent.instance().componentDidMount();

	expect(window.fetch).toBeCalledWith('/message');
	expect(myComponent.instance().state).toEqual({message: 'Hello from the enterJS'});
});
