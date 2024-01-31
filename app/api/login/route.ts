import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body);
  // once valid, we know auth is complete
  // if (isValid) {
  //   try {
  //     accountAddress = await getFrameAccountAddress(message, { NEYNAR_API_KEY: 'NEYNAR_API_DOCS' });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://frameus.tv/login-success.png" />
    <meta property="fc:frame:button:1" content="Take me there" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="https://frameus.tv/api/chat" />
  </head></html>`);
}
