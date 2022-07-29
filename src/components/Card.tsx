import { View, Text, Flex} from 'native-base';
import { ReactElement } from 'react';

interface CardProps {
  title: string;
  icon: ReactElement;
  value: string;
  color: string;
  valueTextColor: string;
  titleCardColor: string;
}

export function Card(props: CardProps, ...rest) {
  return (
      <View bg={props.color} w={'56'} h={'32'} mx={2} my={2} justifyContent={'center'}>
        <Flex direction="row" display={'flex'} justifyContent={'space-between'} p={2} mb={2}>
          <Text fontFamily='Roboto_400Regular' fontSize={32} color={props.titleCardColor}>{props.title}</Text>
          {props.icon}          
        </Flex>
        <View justifyContent={'center'} alignItems={'center'} >
          <Text fontFamily='Poppins_400Regular' color={props.valueTextColor} fontSize={48}>{props.value}</Text>
        </View>
      </View>
  );
}