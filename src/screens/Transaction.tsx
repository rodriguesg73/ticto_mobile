import { useNavigation } from '@react-navigation/core';
import { Heading, VStack } from 'native-base';

export function Transaction() {
  const navigation = useNavigation();
  return (
    <VStack>
      <Heading>Teste</Heading>
    </VStack>
  );
}