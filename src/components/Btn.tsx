import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface BtnInterface {
  label: string;
  handler: () => void;
}

const Btn: FC<BtnInterface> = ({label, handler}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          marginVertical: 20,
          backgroundColor: '#FDC50C',
          paddingHorizontal: 50,
          paddingVertical: 12,
          borderRadius: 50,
          elevation: 5,
        }}>
        <Text style={{color: '#000'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;
