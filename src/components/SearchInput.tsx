import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style = {}}: Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue, 1500);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={style}>
      <View style={styles.textBg}>
        <TextInput
          placeholder="Buscar pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBg: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
  },
});
