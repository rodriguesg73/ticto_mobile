import { Box, FlatList, HStack, Spacer, Text, VStack, Heading, Avatar, AlertDialog, Button } from 'native-base';
import { useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';

import {dataList} from '../data/data';

interface TransactionProps {
  id: string;
  description: string;
  value: string;
  type: boolean;
  category: string;
  date: string 
}


export function ScrollList() {
  const [data, setData] = useState(dataList);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (id: string) => {setIsOpen(!isOpen); handleDeleteTransaction(id)};
  
  const handleDeleteTransaction = (id: string) => {
    const filteredData = dataList.filter(item => item.id !== id);
    setData(filteredData);
  };

  const currencyFormat = (value) => {
    return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3" color="gray.50">
        Transações
      </Heading>
      <FlatList data={data} renderItem={({item }) => <Box borderBottomWidth="1" _dark={{ borderColor: "gray.600" }}
        borderColor="coolGray.200" pl="4" pr="5" py="2">
        <HStack space={3} justifyContent="space-between">
          <VStack>
            <Text _dark={{ color: "warmGray.50" }} color="gray.500" bold>
                {item.description}
            </Text>
            <Text color="coolGray.600" _dark={{ color: "gray.600" }}>
                {item.category}
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" _dark={{ color: "warmGray.50" }} 
            color={item.type == 1 ? 'green.100' : 'red.500' } 
            alignSelf="flex-start">
              {currencyFormat(item.value)}
          </Text>
          <Spacer />
          <Feather name='trash' color='red'onPress={()=> onOpen(item.id)}/>
        </HStack>
      </Box>} keyExtractor={item => item.id} />
    </Box>
  );
};