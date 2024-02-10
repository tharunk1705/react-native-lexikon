import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Meaning from './Meaning';

const Results = ({results}: {results: any}) => {
  return (
    <ScrollView>
      {results.map((result: any, index: number) => (
        <View key={index + Math.floor(Math.random() * 100)} testID="result">
          <View style={styles.scrollContainer}>
            <Text style={styles.word} testID="word">
              {result.word}
            </Text>
            {result.phonetic && (
              <Text style={styles.phonetic}>{result.phonetic}</Text>
            )}
            {result.meanings.map((meaning: any, idx: number) => (
              <Meaning meaning={meaning} index={idx} />
            ))}
          </View>
          <View style={styles.ruler} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 10,
    paddingHorizontal: 10,
  },
  word: {
    fontSize: 35,
    textTransform: 'lowercase',
    fontFamily: 'Outfit-Regular',
    fontWeight: 'bold',
    color: '#FFF',
  },
  phonetic: {
    fontSize: 20,
    textTransform: 'lowercase',
    color: '#a958eb',
    fontFamily: 'Outfit-Regular',
    fontStyle: 'italic',
  },

  ruler: {
    borderBottomColor: '#FFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 30,
  },
});

export default Results;
