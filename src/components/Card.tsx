import {FC} from 'react';
import {Text, View} from 'react-native';
import {colors} from '../constants';

interface CardInterface {
  title: string;
  price: string;
  border?: boolean;
}

const Card: FC<CardInterface> = ({title, price, border}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          paddingHorizontal: 40,
          paddingVertical: 30,
          justifyContent: 'space-between',
          backgroundColor: colors.ACCENT,
        },
        border && {
          borderBottomWidth: 2,
          borderBottomColor: '#C2B68C',
        },
      ]}>
      <View>
        <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
          {title}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 16,
          }}>{`LKR ${price}`}</Text>
      </View>
    </View>
  );
};

export default Card;
