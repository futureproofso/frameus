import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import '@mantine/core/styles.css';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Join video chat',
    },
  ],
  image: 'https://frameus.tv/park-1.png',
  post_url: 'https://frameus.tv/api/frame',
});

export const metadata: Metadata = {
  title: 'frameustv',
  description: 'video chat for farcaster',
  openGraph: {
    title: 'frameustv',
    description: 'video chat for farcaster',
    images: ['https://frameus.tv/park-1.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Welcome to FrameUs TV</h1>
    </>
  );
}
