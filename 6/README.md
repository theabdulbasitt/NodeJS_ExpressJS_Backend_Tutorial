# Node.js & Express.js Backend Tutorial

A comprehensive learning project demonstrating core concepts of building a backend server with Node.js and Express.js, including middleware, routing, error handling, and CORS configuration.

## 📚 What I Learned

### 1. **Express.js Fundamentals**
- Setting up an Express server from scratch
- Understanding the request-response cycle
- Configuring the server to listen on a specific port (3500)
- Using `express.json()` and `express.urlencoded()` for parsing request bodies

### 2. **Routing with Regular Expressions**
- **String Routes vs RegExp Routes**: Learned the critical difference between passing route patterns as strings vs RegExp objects
- **RegExp Route Syntax**: Mastered the pattern `/^\/route-name(.html)?$/` for flexible routing
  - `^` - Start of the path
  - `\/` - Escaped forward slash (literal `/`)
  - `(.html)?` - Optional `.html` extension
  - `$` - End of the path
- **Catch-All Routes**: Using `/.*/` regex for 404 handling instead of the deprecated `'*'` wildcard

### 3. **Custom Middleware**
- **Logger Middleware**: Created a custom logging system that:
  - Logs all incoming requests (method, origin, URL)
  - Uses `date-fns` for timestamp formatting
  - Uses `uuid` for unique request IDs
  - Writes logs to files asynchronously using `fs.promises`
- **Error Handler Middleware**: Implemented centralized error handling that:
  - Logs errors with timestamps and UUIDs
  - Returns appropriate error responses
  - Uses the middleware chain with `next()`

### 4. **CORS (Cross-Origin Resource Sharing)**
- Configured CORS with a whitelist approach
- Implemented origin validation with callbacks
- Understood the importance of CORS in API security

### 5. **Route Handlers**
- **Single Route Handlers**: Basic request handling
- **Multiple Route Handlers**: Chaining handlers with `next()`
- **Route Handler Arrays**: Passing multiple handlers as an array `[one, two, three]`

### 6. **HTTP Redirects**
- Implemented 301 (permanent) redirects
- Understood the difference between 301 and 302 (temporary) redirects

### 7. **Content Negotiation**
- Using `req.accepts()` to determine client preferences
- Serving different content types (HTML, JSON, plain text) based on the `Accept` header

### 8. **Static File Serving**
- Configured `express.static()` to serve files from the `public` directory
- Understood the middleware order importance

### 9. **File System Operations**
- Using `path.join()` for cross-platform file paths
- Working with `__dirname` for absolute paths
- Creating directories and appending to files asynchronously

### 10. **Development Tools**
- **Nodemon**: Auto-restarting the server on file changes
- **NPM Scripts**: Setting up `start` and `dev` scripts

## 🛠️ Technologies Used

- **Node.js** (v24.11.1) - JavaScript runtime
- **Express.js** (v5.1.0) - Web framework
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **date-fns** (v4.1.0) - Date formatting
- **uuid** (v13.0.0) - Unique ID generation
- **Nodemon** (v3.1.10) - Development auto-reload

## 📁 Project Structure

```
6/
├── middleware/
│   ├── logEvents.js       # Custom logging middleware
│   └── errorHandler.js    # Error handling middleware
├── views/
│   ├── index.html         # Home page
│   ├── new-page.html      # Sample page
│   ├── 404.html           # Custom 404 page
│   └── subdir/            # Subdirectory example
├── public/
│   ├── css/               # Static CSS files
│   └── img/               # Static images
├── logs/
│   ├── reqLog.txt         # Request logs
│   └── errLog.txt         # Error logs
├── data/                  # Data storage
├── server.js              # Main server file
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will run on `http://localhost:3500`

## 🔍 Available Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` or `/index` or `/index.html` | GET | Home page |
| `/new-page` or `/new-page.html` | GET | Sample page |
| `/old-page` or `/old-page.html` | GET | Redirects to `/new-page.html` (301) |
| `/hello` or `/hello.html` | GET | Returns "Hello World!" |
| `/chain` or `/chain.html` | GET | Demonstrates chained route handlers |
| Any other route | ALL | Returns 404 (HTML/JSON/Text based on Accept header) |

## 🐛 Key Debugging Lessons

### PathError: Unexpected Character in Route
**Problem**: Using regex syntax as a string in routes
```javascript
app.get('^/$|/index(.html)?', ...) // ❌ Wrong - String with regex syntax
```

**Solution**: Use proper RegExp objects
```javascript
app.get(/^\/$|\/index(.html)?$/, ...) // ✅ Correct - RegExp object
```

### PathError: Missing Parameter Name
**Problem**: Using `'*'` wildcard for catch-all routes in modern Express
```javascript
app.all('*', ...) // ❌ Causes PathError in Express v5+
```

**Solution**: Use regex pattern instead
```javascript
app.all(/.*/, ...) // ✅ Works reliably across versions
```

### Key Takeaway
Modern Express.js (v5+) and the `path-to-regexp` library handle route patterns differently than older versions. When using special characters or patterns:
- **Simple paths** → Use strings: `'/about'`
- **Route parameters** → Use strings: `'/users/:id'`
- **Wildcards/patterns** → Use RegExp: `/.*/`, `/^\/page(.html)?$/`

## 📝 Middleware Execution Order

The order of middleware is crucial in Express:

1. **Logger** - Logs all requests
2. **CORS** - Handles cross-origin requests
3. **Body Parsers** - Parse URL-encoded and JSON data
4. **Static Files** - Serve files from `public/`
5. **Route Handlers** - Handle specific routes
6. **404 Handler** - Catch-all for unmatched routes
7. **Error Handler** - Handle errors (must be last)

## 🎯 Best Practices Learned

1. **Always use `path.join(__dirname, ...)`** for file paths to ensure cross-platform compatibility
2. **Use async/await** for file system operations to avoid blocking
3. **Implement proper error handling** with try-catch blocks
4. **Use middleware for cross-cutting concerns** (logging, error handling)
5. **Validate origins in CORS** for security
6. **Use RegExp objects** for complex route patterns in modern Express
7. **Implement content negotiation** for better API design
8. **Use proper HTTP status codes** (404, 301, 500, etc.)

## 🔗 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [path-to-regexp Documentation](https://github.com/pillarjs/path-to-regexp)
- [CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 📄 License

ISC

---

**Author**: Learning Node.js & Express.js  
**Version**: 1.0.0
