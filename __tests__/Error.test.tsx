import React from 'react';
import {render} from '@testing-library/react-native';
import Error from '../components/Error';

test('render expected content', () => {
  const {getByTestId} = render(<Error error="This is a error" />);

  const errorElement = getByTestId('error');

  expect(errorElement).toBeTruthy();
});
