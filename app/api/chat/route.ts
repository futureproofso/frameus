import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  return Response.redirect(
    "https://frameus.tv/chat",
    302
  );
}

export const dynamic = 'force-dynamic';
