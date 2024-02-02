import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import '@mantine/core/styles.css';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Join video chat',
    },
  ],
  image: 'https://frameus.tv/home.png',
  post_url: 'https://frameus.tv/api/login',
});

export const metadata: Metadata = {
  title: 'kernel founder convo',
    description: 'kernel founder convo',
  openGraph: {
    title: 'kernel founder convo',
    description: 'kernel founder convo',
    images: ['https://frameus.tv/home.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Welcome to the Kernel Founder Convo</h1>
    </>
  );
}
