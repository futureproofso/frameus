import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';
import { useState } from 'react';

interface UsernameProps {
    onDone: any;
}

export function Username({ onDone }: UsernameProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [username, setUsername] = useState<string | undefined>(undefined);

  function handleDone() {
    onDone(username);
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Welcome to the Kernel Founder Convo!">
        <TextInput placeholder='Enter your name' value={username} onChange={(e) => {
            setUsername(e.target.value);
        }} />
        <Button onClick={handleDone}>Done</Button>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
