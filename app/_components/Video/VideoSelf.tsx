import { Avatar, Box } from "@mantine/core";
import { VideoView } from "@whereby.com/browser-sdk/react";
import Draggable from "react-draggable";

interface VideoSelfProps {
  stream: any;
}

export const VideoSelf = ({ stream }: VideoSelfProps) => {
  if (stream) {
    return (
      <Draggable
        bounds="#video-box"
        positionOffset={{ x: "0", y: "0" }}
        // onStop={handleDragStop}
      >
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
      </Draggable>
    );
  } else {
    return <Avatar />;
  }
};
