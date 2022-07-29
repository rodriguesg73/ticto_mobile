import { View } from 'native-base';
import { Button } from '../components/Button'

import Logo from '../assets/logo.svg'


export const Header = () => {
  
  return (
    <View bg="purple.500" mt="25px" h={70} w='full' justifyContent="space-between" alignItems="center" flexDir={'row'}>
      <Logo />
      <Button title='NOVA TRANSAÇÃO' color='purple.600' />
    </View>
  );
}