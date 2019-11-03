import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('React compnent test', () => {
  const component = renderer.create(<App />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
