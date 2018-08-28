//import test from 'ava'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import expect from 'expect'
//import App from './App';

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<App />, div);
// });

test('adds 2 + 3 to equal 5', () => {
    const sum = (a, b) => (a + b);
    expect(sum(3,2)).toBe(5);
});


test('arrays are equal', () => {
    const a = [1,2]
    const b = [1,2]
	expect(a).toEqual(b);
});