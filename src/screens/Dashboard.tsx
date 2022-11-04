import {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Topbar, Greeting, Card, RoundedBtn} from '../components';
import {colors} from '../constants';

const Dashboard: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.SECONDARY}}>
      <Topbar title="Dashboard" />
      <Greeting username="Isuka" />
      <Card title="My Assets" price="1,140,740.21" border />
      <Card title="My Liabilities" price="2,240,740.21" />
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 300, height: 300}}
          source={require('../assets/card.png')}
          resizeMode="center"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <RoundedBtn icon="ios-paper-plane-outline" label="Send" />
        <RoundedBtn icon="ios-create-outline" label="Pay" />
        <RoundedBtn icon="ios-cube-outline" label="Receive" />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
