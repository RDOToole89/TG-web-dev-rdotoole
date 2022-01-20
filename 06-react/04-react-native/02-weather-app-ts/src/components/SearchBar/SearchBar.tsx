import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { spacing } from '../../constants/sizes';
import { SearchBarInterface } from './searchbar';
import { fonts } from '../../constants/fonts';

export const SearchBar = ({ searchInput, onChangeSearch, onClickSetCity }: SearchBarInterface) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(userInput) => onChangeSearch(userInput)}
        value={searchInput}
        placeholder='Enter a City'
        style={styles.searchInput}
      />
      <SubmitButton size={40} onClickSetCity={onClickSetCity} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: spacing.sm,
    paddingLeft: spacing.xl,
    backgroundColor: 'hsla(200, 51%, 41%, .5)',
    marginBottom: 200,
  },

  searchInput: {
    fontFamily: fonts.primary,
    padding: spacing.sm,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 1,
  },
});
