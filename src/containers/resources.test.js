import React from 'react';
import renderer from 'react-test-renderer';
import Resources from './Resources';

it('Resources renders without crashing', () => {
  const rendered = renderer.create(<Resources />).toJSON();
  expect(rendered).toBeTruthy();
});
