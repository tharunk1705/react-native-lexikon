import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Error from './components/Error';
import Results from './components/Results';
import Search from './components/Search';

const App = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [results, setResults] = useState<any>([]);

  const handleKeywordChange = (key: string) => {
    key = key.trim();
    if (key.includes(' ')) {
      setError('Word cannot contain Space');
      return;
    } else {
      setKeyword(key);
      setError('');
    }
  };

  const handleSearch = async () => {
    if (error.length > 0) {
      return;
    }
    if (keyword.length < 2) {
      setError('Word should atleast be of 2 characters');
      setResults([]);
    } else {
      let res = await fetchResult();
      if (res.status === 'success') {
        // console.log(res.data);
        setResults(res.data);
        setKeyword('');
      } else {
        setError(res.data.title);
        setResults([]);
      }
    }
  };

  const fetchResult = async () => {
    let responseData: any = {};
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`,
    );
    if (response.status === 200) {
      responseData['status'] = 'success';
    } else {
      responseData['status'] = 'failure';
    }
    responseData['data'] = await response.json();
    return responseData;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Lexikon</Text>
        <Search
          keyword={keyword}
          handleKeywordChange={handleKeywordChange}
          handleSearch={handleSearch}
        />
        {error && <Error error={error} />}
        <Results results={results} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#171717',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'Outfit-Regular',
  },
});

export default App;
