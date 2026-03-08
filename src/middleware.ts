import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/lib/session';

const protectedRoutes = ['/dashboard', '/request-card'];

export async function middleware(request: NextRequest) {
    const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));

    if (isProtected) {
        const session = request.cookies.get('session');

        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Optional: Update session expiry automatically on requests
    return await updateSession(request) || NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
