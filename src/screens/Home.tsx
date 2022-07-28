import { ScrollView, View } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { Header } from '../components/Header';
import { Card } from '../components/Card';

export const Home = () => {
  return (
    <View flex={1} bg="cinza.200">
      <Header />
      <ScrollView horizontal={true} h={32}>
        <Card 
          color='white' 
          title='Entradas'
          titleCardColor='gray.700'
          valueTextColor='gray.600'
          icon={<Feather name="arrow-down-left" size={32} color={'green'} />} value='R$1500,00'
        />
        <Card 
          color='white' 
          title='Saídas' 
          titleCardColor='gray.700'
          valueTextColor='gray.600'
          icon={<Feather name="arrow-up-right" size={32} color={'red'} />} value='R$1500,00'
        />
        <Card 
          color='green.100' 
          title='Saldo Total' 
          titleCardColor='white'
          valueTextColor='white'
          icon={<Feather name="dollar-sign" size={32} color={'white'} />} value='R$1500,00'
        />
      </ScrollView>
    </View>
  )
}