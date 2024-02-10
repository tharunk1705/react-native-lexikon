import React from 'react';
import {render} from '@testing-library/react-native';
import Search from './../components/Search';

test('render expected content', () => {
  const {getByTestId} = render(
    <Search
      keyword={''}
      handleKeywordChange={() => {}}
      handleSearch={() => {}}
    />,
  );

  const inputField = getByTestId('inputField');

  expect(inputField).toBeTruthy();
});
