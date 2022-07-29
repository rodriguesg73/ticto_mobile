import { ScrollView, View } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../screens/RootStackParams';

import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { ScrollList } from '../components/ScrollList';

type transactionScreenProp = StackNavigationProp<RootStackParamList, 'Transaction'>;

export const Home = () => {


  return (
    <View flex='1' bg="cinza.200">
      <Header />
      <View h={'150px'}>
        <ScrollView horizontal={true}>
          <Card 
            color='white' 
            title='Entradas'
            titleCardColor='gray.700'
            valueTextColor='gray.600'
            type={1}
            icon={<Feather name="arrow-down-left" size={32} color={'green'} />}
          />
          <Card 
            color='white' 
            title='Saídas' 
            titleCardColor='gray.700'
            valueTextColor='gray.600'
            type={2}
            icon={<Feather name="arrow-up-right" size={32} color={'red'} />} 
          />
          <Card 
            color='green.100' 
            title='Saldo Total' 
            titleCardColor='white'
            valueTextColor='white'
            type={3}
            icon={<Feather name="dollar-sign" size={32} color={'white'} />} 
          />
        </ScrollView>
      </View>
      <ScrollList />
    </View>
  )
}