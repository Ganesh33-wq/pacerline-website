require('dotenv').config();
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const jwt = require('jsonwebtoken');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.ADMIN_PORT || 5555;

// Function to check if user is authenticated
function isAuthenticated(req) {
  const cookies = req.headers.cookie || '';
  const tokenMatch = cookies.match(/admin-token=([^;]+)/);
  
  if (!tokenMatch) return false;
  
  try {
    jwt.verify(tokenMatch[1], process.env.JWT_SECRET);
    return true;
  } catch (error) {
    return false;
  }
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // Handle root path - check authentication first
    if (pathname === '/') {
      if (isAuthenticated(req)) {
        // If authenticated, redirect to dashboard
        res.writeHead(302, { Location: '/admin/dashboard' });
      } else {
        // If not authenticated, redirect to login
        res.writeHead(302, { Location: '/admin/login' });
      }
      res.end();
      return;
    }

    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Admin server ready on http://localhost:${port}`);
    console.log('📋 Admin panel: http://localhost:5555/admin/login');
  });
});