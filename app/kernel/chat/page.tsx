'use client';

import { useState } from "react";
import {
  ActionIcon,
  Box,
  Button,
  ButtonProps,
  Container,
  Flex,
  MantineProvider,
  Stack,
} from "@mantine/core";
import {
  IconCamera,
  IconCameraOff,
  IconMicrophone,
  IconMicrophoneOff,
} from "@tabler/icons-react";
import {
  useRoomConnection,
} from "@whereby.com/browser-sdk/react";
import { FadeBlack } from "../../_components/FadeOut/FadeOut";
import { VideoOther } from "../../_components/Video/VideoOther";
import { VideoSelf } from "../../_components/Video/VideoSelf";
import { Username } from "../../_components/Username/Username";
import PublicVideoChat from "../../_components/Chat/PublicVideoChat";


const defaultButtonProps: Partial<ButtonProps> = {
  color: "fl-secondary",
  radius: "md",
  size: "lg",
};

const ROOM_URL =
  "https://founderslog.whereby.com/first-room7ffbf431-ffc5-4fb1-bd81-3a3a3e67693f";

export default function KernelChat() {
  const [username, setUsername] = useState<string | undefined>();

  return (
    <>
    <MantineProvider>
      {!username && <Username onDone={setUsername} />}
      {username && <PublicVideoChat username={username} />}
    </MantineProvider>
    </>
  );
}
