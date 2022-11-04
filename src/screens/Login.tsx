import {FC} from 'react';
import {Image, SafeAreaView, View, useWindowDimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Btn} from '../components';

interface LoginInterface {
  navigation: any;
}

const Login: FC<LoginInterface> = ({navigation}) => {
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView>
      <LinearGradient
        style={{height: '100%', alignItems: 'center'}}
        start={{x: 0.5, y: 0.5}}
        end={{x: 1.0, y: 1.0}}
        colors={['#FCCA1B', '#FFFFFF']}>
        <View
          style={{
            height: height * 0.4,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 200, height: 150}}
            source={require('../assets/logo.png')}
            resizeMode="center"
          />
        </View>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Btn handler={() => navigation.navigate('Dashboard')} label="Login" />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;
