import { Box, FlatList, HStack, Spacer, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

export function ScrollList() {
  const data = [{
    id: '1',
    description: 'Curso React',
    value: 899,
    category: 'Educação',
    date: '2022-07-28'
  },{
    id: '2',
    description: 'Curso React',
    value: 899,
    category: 'Educação',
    date: '2022-07-28'
  },
  ,{
    id: '3',
    description: 'Curso React',
    value: 7350,
    category: 'Receita fixa',
    date: '2022-07-28'
  },{
    id: '4',
    description: 'Curso React',
    value: 899,
    category: 'Educação',
    date: '2022-07-28'
  },
];
  return (
    <FlatList data={data} keyExtractor={item => item?.id} renderItem={({
      item
    }) => <Box borderBottomWidth={'1'} _dark={{
      borderColor: "gray.500"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="space-between">
        <Text _dark={{color: "warmGray.50"}} color="coolGray.800" bold>{item.description}</Text>
        <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>{item.value}</Text>
        <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>{item.category}</Text>
        <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>{item.date}</Text>
        <Spacer />
        <Feather name="trash"  />
      </HStack>
    </Box>} /> 
  );
}