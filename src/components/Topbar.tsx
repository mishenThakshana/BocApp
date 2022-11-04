import {FC} from 'react';
import {View, StatusBar, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../constants';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface TopbarInterface {
  title: string;
}

const Topbar: FC<TopbarInterface> = ({title}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} />
      <View
        style={{
          padding: 10,
          backgroundColor: colors.PRIMARY,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Ionicon name="ios-menu" size={40} color="#000" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: '#000', fontSize: 22}}>{title}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={{width: 40, height: 40, borderRadius: 100}}
              source={require('../assets/nevil.jpg')}
              resizeMode="center"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Topbar;
