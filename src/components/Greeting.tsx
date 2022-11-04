import {FC} from 'react';
import {Text, View} from 'react-native';

interface GreetingInterface {
  username: string;
}

const Greeting: FC<GreetingInterface> = ({username}) => {
  return (
    <View style={{alignItems: 'center', marginVertical: 20}}>
      <Text style={{color: '#000', fontSize: 20}}>Welcome {username} !</Text>
    </View>
  );
};

export default Greeting;
