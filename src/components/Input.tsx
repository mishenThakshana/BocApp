import {FC} from 'react';
import {TextInput, View} from 'react-native';

interface InputInterface {
  placeholder: string;
}

const Input: FC<InputInterface> = ({placeholder}) => {
  return (
    <View style={{marginVertical: 5}}>
      <TextInput
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          paddingHorizontal: 100,
          borderColor: '#A9A9A9',
          borderRadius: 10,
          paddingVertical: 12,
        }}
        placeholder={placeholder}
        placeholderTextColor="#000"
      />
    </View>
  );
};

export default Input;
