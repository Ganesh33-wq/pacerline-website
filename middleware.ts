import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for login page and API routes
  if (pathname === '/admin/login' || pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // Check if the request is for admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin-token')?.value;
    
    if (!token) {
      console.log('No token found, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    // Just check if token exists - let the dashboard handle verification
    console.log('Token found in middleware');
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};