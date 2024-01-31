import { Box } from "@mantine/core";
import { RemoteParticipant, VideoView } from "@whereby.com/browser-sdk/react";
import Draggable from "react-draggable";

interface VideoOtherProps {
  remoteParticipants: Array<RemoteParticipant>;
}

export const VideoOther = ({ remoteParticipants }: VideoOtherProps) => {
  function renderVideoOther(participant: RemoteParticipant) {
    return participant.stream ? (
      <Draggable
        bounds="#video-box"
        key={participant.id}
        positionOffset={{ x: "0", y: "0" }}
        // position={position}
        // onStart={() => false}
      >
        <Box
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            // transition: "all 0.5s ease-out",
          }}
          h={"150px"}
          w={"150px"}
          bg="lime"
          // onDoubleClick={triggerSize}
        >
          <VideoView
            style={{
              minHeight: "270px",
              minWidth: "270px",
              marginLeft: "-60px",
              marginTop: "-60px",
            }}
            stream={participant.stream}
          />
        </Box>
      </Draggable>
    ) : null;
  }
  return <>{remoteParticipants.map(renderVideoOther)}</>;
};
