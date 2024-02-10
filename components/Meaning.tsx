import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Meaning = ({meaning, index}: {meaning: any; index: number}) => {
  return (
    <View key={index} testID="meaning">
      <Text style={styles.partOfSpeech}>~ {meaning.partOfSpeech} ~</Text>

      <View testID="definition">
        {meaning.definitions.map(({definition}: any, i: number) => (
          <View key={i}>
            <Text style={styles.definition}>
              <Text style={styles.bullets}>{'\u2B24' + '  '}</Text>
              {definition}
            </Text>
          </View>
        ))}
      </View>
      <View>
        {meaning.synonyms.length > 0 && (
          <View>
            <Text>Synonyms: </Text>
            <Text>{meaning.synonyms.join(', ')}</Text>
          </View>
        )}
        {meaning.antonyms.length > 0 && (
          <View>
            <Text>Antonyms: </Text>
            <Text>{meaning.antonyms.join(', ')}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bullets: {
    color: '#a958eb',
  },
  definition: {
    marginVertical: 10,
    fontFamily: 'Outfit-Regular',
  },

  partOfSpeech: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
  },
});

export default Meaning;
