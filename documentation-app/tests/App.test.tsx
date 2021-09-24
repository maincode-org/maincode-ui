import React from 'react';
import { render } from '@testing-library/react';
import DocumentationApp from '../src/DocumentationApp';

test('renders without crashing', () => {
  const { baseElement } = render(<DocumentationApp />);
  expect(baseElement).toBeDefined();
});
