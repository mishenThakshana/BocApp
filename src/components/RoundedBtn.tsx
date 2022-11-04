import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';

interface BtnInterface {
  icon: string;
  label: string;
}

const RoundedBtn: FC<BtnInterface> = ({icon, label}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: colors.PRIMARY,
              padding: 16,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name={icon} size={30} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={{color: '#000', fontSize: 16}}>{label}</Text>
      </View>
    </View>
  );
};

export default RoundedBtn;
