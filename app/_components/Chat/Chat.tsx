import { useState } from "react";
import { Box, Button, ButtonProps, Group, TextInput } from "@mantine/core";
import { ChatMessage } from "@whereby.com/browser-sdk/react";
import "./Chat.css";

const defaultButtonProps: Partial<ButtonProps> = {
  color: "fl-secondary",
  radius: "md",
  size: "lg",
};

interface ChatProps {
  chatMessages: Array<ChatMessage>;
  sendChatMessage: (text: string) => void;
}

export const Chat = ({ chatMessages, sendChatMessage }: ChatProps) => {
  const [nextMessage, setNextMessage] = useState("");

  async function sendMessage() {
    sendChatMessage(nextMessage);
    setNextMessage("");
  }

  function renderMessages() {
    return chatMessages.map((message) => {
      try {
        // const msg = JSON.parse(message.text);
        return <div>{message.text}</div>;
      } catch (err) {}
    });
  }

  return (
    <>
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          marginBottom: "25vh",
        }}
      >
        {renderMessages()}
      </Box>
      <Group justify="space-around" gap="lg" px="sm">
        <TextInput
          description=" "
          color="fl-primary"
          variant="filled"
          radius="md"
          size="lg"
          placeholder={"Chat here"}
          value={nextMessage}
          onChange={(event) => setNextMessage(event.currentTarget.value)}
          style={{ flex: 1 }}
        />
        <Button {...defaultButtonProps} onClick={sendMessage}>
          Send
        </Button>
      </Group>
    </>
  );
};
