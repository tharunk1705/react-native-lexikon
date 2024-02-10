import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Search = ({
  keyword,
  handleKeywordChange,
  handleSearch,
}: {
  keyword: string;
}) => {
  return (
    <View style={styles.flexRowContainer}>
      <TextInput
        defaultValue={keyword}
        onChangeText={handleKeywordChange}
        style={styles.inputField}
        testID="inputField"
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    height: 100,
  },
  inputField: {
    backgroundColor: '#292727',
    width: 160,
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontFamily: 'Outfit-Regular',
  },
  searchButton: {
    backgroundColor: '#515156',
    height: 40,
    width: 75,
    fontFamily: 'Outfit-Regular',
    padding: 5,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    marginVertical: 20,
  },
});
export default Search;
