import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const ADMIN_IDENTIFIERS = process.env.ADMIN_CREDENTIAL

export async function GET() {
  const user = await currentUser();
  
  if (!user) {
    return NextResponse.json({ role: 'guest' }, { status: 401 });
  }

  let role = 'user';
  
  if (user.username === ADMIN_IDENTIFIERS) {
    role = 'admin';
  }

  return NextResponse.json({ role });
}