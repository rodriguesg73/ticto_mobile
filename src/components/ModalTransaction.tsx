import {  } from 'native-base';
import { useState, useRef } from 'react';
import { Button as NativeBaseButton, FormControl, Input, Modal, Alert} from 'native-base';


interface ModalProps {
  showModal: boolean;
  handleClose: () => void
}

export function ModalTransaction(props: ModalProps) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal  isOpen={props.showModal} onClose={props.handleClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <NativeBaseButton.Group space={2}>
              <NativeBaseButton variant="ghost" colorScheme="blueGray" onPress={props.handleClose}>
                Cancel
              </NativeBaseButton>
              <NativeBaseButton onPress={props.handleClose}>
                Save
              </NativeBaseButton>
            </NativeBaseButton.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  );
}