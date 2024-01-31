'use client';

import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { TouchEvent, useEffect, useState } from "react";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  ButtonProps,
  Container,
  Flex,
  Group,
  MantineProvider,
  Overlay,
  Stack,
  TextInput,
  Transition,
} from "@mantine/core";
import {
  IconCamera,
  IconCameraOff,
  IconMicrophone,
  IconMicrophoneOff,
} from "@tabler/icons-react";
import {
  RemoteParticipant,
  useRoomConnection,
} from "@whereby.com/browser-sdk/react";
import { FadeBlack } from "../_components/FadeOut/FadeOut";
import { VideoOther } from "../_components/Video/VideoOther";
import { VideoSelf } from "../_components/Video/VideoSelf";

const defaultButtonProps: Partial<ButtonProps> = {
  color: "fl-secondary",
  radius: "md",
  size: "lg",
};

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: 'Join video chat',
//     },
//   ],
//   image: 'https://frameus.tv/park-1.png',
//   post_url: 'https://frameus.tv/api/frame',
// });

// export const metadata: Metadata = {
//   title: 'frameustv',
//   description: 'video chat for farcaster',
//   openGraph: {
//     title: 'frameustv',
//     description: 'video chat for farcaster',
//     images: ['https://frameus.tv/park-1.png'],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

const ROOM_URL =
  "https://founderslog.whereby.com/first-room7ffbf431-ffc5-4fb1-bd81-3a3a3e67693f";

type Position = {
  x: number;
  y: number;
};

export default function PublicVideoChat() {
  const roomConnection = useRoomConnection(ROOM_URL, {
    localMediaOptions: {
      audio: true,
      video: true,
    },
  });
  const { components, state, actions } = roomConnection;
  const { VideoView } = components;
  const { localParticipant, remoteParticipants, chatMessages } = state;
  const { toggleCamera, toggleMicrophone, sendChatMessage } = actions;

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [leaveTransition, setLeaveTransition] = useState(false);
  const [videoPositions, setVideoPositions] = useState<
    Record<string, Position>
  >({});

  function handleLeave() {
    setLeaveTransition(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  function handleCameraClick() {
    const next = !cameraOn;
    toggleCamera(next);
    setCameraOn(next);
  }

  function handleMicClick() {
    const next = !micOn;
    toggleMicrophone(next);
    setMicOn(next);
  }

  return (
    <>
    <MantineProvider>
      <FadeBlack visible={leaveTransition} />
      <Container px="xs">
        <Stack h="100vh" pb="xl">
          <div
            id="video-box"
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              flex: "1",
            }}
          >
            <VideoSelf stream={localParticipant?.stream} />
            <VideoOther remoteParticipants={remoteParticipants} />
          </div>
          <Stack h="20vh">
            <Flex align="left" justify={"space-around"} gap="lg" px="sm">
              <Button
                {...defaultButtonProps}
                variant="light"
                onClick={handleLeave}
                fullWidth
              >
                Leave Quietly
              </Button>
              <ActionIcon
                size={"xl"}
                variant={cameraOn ? "filled" : "light"}
                aria-label="Camera"
                onClick={handleCameraClick}
              >
                {cameraOn ? (
                  <IconCamera
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                ) : (
                  <IconCameraOff
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                )}
              </ActionIcon>
              <ActionIcon
                size={"xl"}
                variant={micOn ? "filled" : "light"}
                aria-label="Mic"
                onClick={handleMicClick}
              >
                {micOn ? (
                  <IconMicrophone
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                ) : (
                  <IconMicrophoneOff
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                )}
              </ActionIcon>
            </Flex>
            <Box px="sm">
              <a href="https://founderslog.whereby.com/first-room7ffbf431-ffc5-4fb1-bd81-3a3a3e67693f">
                Join here if it's not working
              </a>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </MantineProvider>
    </>
  );
}
