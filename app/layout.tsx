import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <ColorSchemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
