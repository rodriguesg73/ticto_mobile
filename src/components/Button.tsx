import { Button as NativeBaseButton, Text } from 'native-base';
import { ButtonProps } from 'react-native';

interface NativeBaseButtonProps extends ButtonProps {
  title: string;
  color: string;
}

export function Button(props: NativeBaseButtonProps, ...rest) {
  return (
    <NativeBaseButton mr={2} colorScheme="purple" {...rest}>
      <Text fontFamily={'Roboto_400Regular'} color='white' >{props.title}</Text>
    </NativeBaseButton>
  );
}