import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Error = ({error}: {error: string}) => {
  return (
    <View>
      <Text style={styles.error} testID="error">
        ⚠️ {error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontFamily: 'Outfit-Regular',
    fontSize: 20,
    textAlign: 'justify',
  },
});

export default Error;
