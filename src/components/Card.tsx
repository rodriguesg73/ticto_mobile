import { View, Text, Flex} from 'native-base';
import { ReactElement, useEffect, useState } from 'react';

import { dataList } from '../data/data'

interface CardProps {
  title: string;
  icon: ReactElement;
  type: number;
  color: string;
  valueTextColor: string;
  titleCardColor: string;
}

export function Card(props: CardProps, ...rest) {
  let valorEntrada = 0;
  let valorSaida = 0;
  let saldoTotal = 0;
  dataList.map((item) => {
    if(item.type == 1)
      valorEntrada += item.value;
    else
      valorSaida += item.value
  });

  saldoTotal = valorEntrada - valorSaida;

  const currencyFormat = (value) => {
    return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
      <View bg={props.color} w={'56'} h={'32'} mx={2} my={2} justifyContent={'center'}>
        <Flex direction="row" display={'flex'} justifyContent={'space-between'} p={2} mb={2}>
          <Text fontFamily='Roboto_400Regular' fontSize={32} color={props.titleCardColor}>{props.title}</Text>
          {props.icon}          
        </Flex>
        <View justifyContent={'center'} alignItems={'center'} >
          <Text fontFamily='Poppins_400Regular' color={props.valueTextColor} fontSize={48}>{props.type == 1 ? currencyFormat(valorEntrada) : props.type == 2 ? currencyFormat(valorSaida) : currencyFormat(saldoTotal)}</Text>
        </View>
      </View>
  );
}