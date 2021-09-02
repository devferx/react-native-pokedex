import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.mainContainer,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
});
