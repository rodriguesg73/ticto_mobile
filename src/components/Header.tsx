import { useState } from 'react';
import {View, Alert } from 'native-base';

import { Button } from '../components/Button';
import { ModalTransaction } from '../components/ModalTransaction';

import Logo from '../assets/logo.svg';

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => { setShow(true) };
  const handleClose = () => setShow(false);

  return (
    <View bg="purple.500" mt="25px" h={70} w='full' justifyContent="space-between" alignItems="center" flexDir={'row'}>
      <Logo />
      <Button title='NOVA TRANSAÇÃO' color='purple.600' onPress={handleOpen}/>
      <ModalTransaction showModal={show} handleClose={handleClose}/>
    </View>
  );
}