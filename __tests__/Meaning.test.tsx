import React from 'react';
import {render} from '@testing-library/react-native';
import Meaning from './../components/Meaning';

const MEANING = {
  partOfSpeech: 'noun',
  definitions: [
    {
      definition: 'A challenge, trial.',
      synonyms: [],
      antonyms: [],
    },
    {
      definition:
        'A cupel or cupelling hearth in which precious metals are melted for trial and refinement.',
      synonyms: [],
      antonyms: [],
    },
  ],
  synonyms: ['examination', 'quiz'],
  antonyms: ['recess'],
};

test('render expected content', () => {
  const {getByTestId} = render(<Meaning meaning={MEANING} index={1} />);

  const meaningElement = getByTestId('meaning');
  const definitionElement = getByTestId('definition');

  expect(meaningElement).toBeTruthy();
  expect(definitionElement).toBeTruthy();
});
