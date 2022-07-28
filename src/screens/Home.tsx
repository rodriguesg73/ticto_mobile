import {VStack, Heading} from 'native-base'

import Logo from '../assets/logo.svg'
import { Input } from '../components/Input'

export const Home = () => {
  return (
    <VStack flex={1} bg='cinza.200' px={8} pt={10}>
      <Logo />
      <Heading>Olá</Heading>
      <Input />
    </VStack>
  )
}