import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const adminPaths = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (adminPaths.some((path) => pathname.startsWith(path))) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    try {
      const payload = {role:"admin"};
      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next(); 
}
export const config = {
  matcher: ["/admin/:path*"],
};
