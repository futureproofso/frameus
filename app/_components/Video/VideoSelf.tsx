import { Avatar, Badge, Box, Stack } from "@mantine/core";
import { VideoView } from "@whereby.com/browser-sdk/react";
import Draggable from "react-draggable";

interface VideoSelfProps {
  stream: any;
  username: string | undefined;
}

export const VideoSelf = ({ stream, username }: VideoSelfProps) => {
  if (stream) {
    return (
      <Draggable
        // bounds="body"
        positionOffset={{ x: "0", y: "0" }}
        // onStop={handleDragStop}
      >
        <Stack>
        <Box
          style={{ borderRadius: "50%", overflow: "hidden" }}
          h={"150px"}
          w={"150px"}
          bg="lime"
        >
          <VideoView
            muted
            style={{
              minHeight: "270px",
              minWidth: "270px",
              marginLeft: "-60px",
              marginTop: "-60px",
            }}
            stream={stream}
          />
        </Box>
        <Badge color="blue" size="xl">{username}</Badge>
        </Stack>
      </Draggable>
    );
  } else {
    return <Avatar />;
  }
};
