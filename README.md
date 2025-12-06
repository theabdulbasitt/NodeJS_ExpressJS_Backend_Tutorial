# Node.js & Express.js Backend Tutorial

A comprehensive learning project demonstrating core concepts of building a RESTful API backend with Node.js and Express.js, including authentication, JWT tokens, middleware, routing, MVC architecture, and security best practices.

## 📚 What I Learned

### 1. **Express.js Fundamentals**
- Setting up an Express server from scratch
- Understanding the request-response cycle
- Configuring the server to listen on a specific port (3500)
- Using `express.json()` and `express.urlencoded()` for parsing request bodies

### 2. **MVC Architecture Pattern**
- **Models**: Data layer with JSON file storage (`employees.json`, `users.json`)
- **Controllers**: Business logic separated into dedicated controller files
  - `employeesController.js` - CRUD operations for employees
  - `registerController.js` - User registration logic
  - `authController.js` - Authentication and JWT generation
- **Routes**: Clean route definitions that delegate to controllers
- **Benefits**: Better code organization, separation of concerns, easier testing

### 3. **RESTful API Design**
- **CRUD Operations**: Create, Read, Update, Delete for employees
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Route Parameters**: Using `:id` for dynamic routes
- **Status Codes**: Proper use of 200, 201, 400, 401, 404, 409, 500
- **JSON Responses**: Consistent API response format

### 4. **Authentication & Security**
- **Password Hashing**: Using `bcrypt` with salt rounds (10)
- **JWT (JSON Web Tokens)**: 
  - Access tokens (short-lived: 30s)
  - Refresh tokens (long-lived: 1d)
- **User Registration**: Duplicate username detection
- **User Login**: Password verification with bcrypt
- **Environment Variables**: Storing secrets in `.env` file

### 5. **Routing with Regular Expressions**
- **String Routes vs RegExp Routes**: Learned the critical difference between passing route patterns as strings vs RegExp objects
- **RegExp Route Syntax**: Mastered the pattern `/^\\/route-name(.html)?$/` for flexible routing
  - `^` - Start of the path
  - `\\/` - Escaped forward slash (literal `/`)
  - `(.html)?` - Optional `.html` extension
  - `$` - End of the path
- **Catch-All Routes**: Using `/.*/` regex for 404 handling instead of the deprecated `'*'` wildcard

### 6. **Custom Middleware**
- **Logger Middleware**: Created a custom logging system that:
  - Logs all incoming requests (method, origin, URL)
  - Uses `date-fns` for timestamp formatting
  - Uses `uuid` for unique request IDs
  - Writes logs to files asynchronously using `fs.promises`
- **Error Handler Middleware**: Implemented centralized error handling that:
  - Logs errors with timestamps and UUIDs
  - Returns appropriate error responses
  - Uses the middleware chain with `next()`

### 7. **CORS (Cross-Origin Resource Sharing)**
- Configured CORS with a whitelist approach
- Implemented origin validation with callbacks
- Moved CORS configuration to separate config file
- Understood the importance of CORS in API security

### 8. **File System Operations**
- **Reading JSON files**: Using `require()` for initial data loading
- **Writing JSON files**: Using `fs.promises.writeFile()` for persistence
- **Async/Await**: Proper async file operations
- **Path handling**: Using `path.join()` for cross-platform compatibility

### 9. **Data Persistence Pattern**
- **In-Memory Data Store**: Object with `setEmployees`/`setUsers` methods
- **File Persistence**: Writing changes back to JSON files
- **Data Validation**: Checking for required fields and duplicates

### 10. **Environment Configuration**
- Using `dotenv` for environment variables
- Storing sensitive data (JWT secrets) in `.env`
- `.gitignore` configuration to protect secrets

### 11. **Route Handlers**
- **Single Route Handlers**: Basic request handling
- **Multiple Route Handlers**: Chaining handlers with `next()`
- **Route Handler Arrays**: Passing multiple handlers as an array `[one, two, three]`
- **Router.route()**: Chaining HTTP methods on the same route

### 12. **Content Negotiation**
- Using `req.accepts()` to determine client preferences
- Serving different content types (HTML, JSON, plain text) based on the `Accept` header

### 13. **Static File Serving**
- Configured `express.static()` to serve files from the `public` directory
- Understanding mount paths for static files
- Understood the middleware order importance

### 14. **Development Tools**
- **Nodemon**: Auto-restarting the server on file changes
- **NPM Scripts**: Setting up `start` and `dev` scripts
- **Git**: Version control and `.gitignore` best practices

## 🛠️ Technologies Used

- **Node.js** (v24.11.1) - JavaScript runtime
- **Express.js** (v5.1.0) - Web framework
- **bcrypt** (v6.0.0) - Password hashing
- **jsonwebtoken** (v9.0.3) - JWT authentication
- **dotenv** (v17.2.3) - Environment variables
- **cookie-parser** (v1.4.7) - Cookie parsing middleware
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **date-fns** (v4.1.0) - Date formatting
- **uuid** (v13.0.0) - Unique ID generation
- **Nodemon** (v3.1.10) - Development auto-reload

## 📁 Project Structure

```
6/
├── config/
│   └── corsOptions.js      # CORS configuration
├── controllers/
│   ├── authController.js   # Authentication logic (login, JWT)
│   ├── employeesController.js  # Employee CRUD operations
│   └── registerController.js   # User registration logic
├── middleware/
│   ├── logEvents.js        # Custom logging middleware
│   └── errorHandler.js     # Error handling middleware
├── model/
│   ├── employees.json      # Employee data storage
│   └── users.json          # User credentials (hashed passwords)
├── routes/
│   ├── api/
│   │   └── employees.js    # Employee API routes
│   ├── auth.js             # Authentication routes
│   ├── register.js         # Registration routes
│   ├── root.js             # Root/home routes
│   └── subdir.js           # Subdirectory example routes
├── views/
│   ├── index.html          # Home page
│   ├── 404.html            # Custom 404 page
│   └── subdir/             # Subdirectory example
├── public/
│   ├── css/                # Static CSS files
│   └── img/                # Static images
├── logs/
│   ├── reqLog.txt          # Request logs
│   └── errLog.txt          # Error logs
├── .env                    # Environment variables (not in Git)
├── .gitignore              # Git ignore rules
├── server.js               # Main server file
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/theabdulbasitt/NodeJS_ExpressJS_Backend_Tutorial.git
   cd NodeJS_ExpressJS_Backend_Tutorial/6
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   ACCESS_TOKEN_SECRET=your_access_token_secret_here
   REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
   PORT=3500
   ```
   
   > **Tip**: Generate secure secrets using:
   > ```bash
   > node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   > ```

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

## 🔍 API Endpoints

### Authentication Routes

| Endpoint | Method | Description | Request Body | Response |
|----------|--------|-------------|--------------|----------|
| `/register` | POST | Register a new user | `{ "user": "username", "pwd": "password" }` | `201` - User created<br>`400` - Missing fields<br>`409` - User exists |
| `/auth` | POST | Login and get JWT tokens | `{ "user": "username", "pwd": "password" }` | `200` - Login success<br>`401` - Invalid credentials |

### Employee API Routes

| Endpoint | Method | Description | Request Body | Response |
|----------|--------|-------------|--------------|----------|
| `/employees` | GET | Get all employees | - | `200` - Array of employees |
| `/employees` | POST | Create new employee | `{ "firstname": "John", "lastname": "Doe" }` | `201` - Employee created<br>`400` - Missing fields |
| `/employees` | PUT | Update employee | `{ "id": 1, "firstname": "Jane", "lastname": "Smith" }` | `200` - Updated employee<br>`400` - Employee not found |
| `/employees` | DELETE | Delete employee | `{ "id": 1 }` | `200` - Deleted successfully<br>`400` - Employee not found |
| `/employees/:id` | GET | Get employee by ID | - | `200` - Employee object<br>`400` - Employee not found |

### Static Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` or `/index` or `/index.html` | GET | Home page |
| Any other route | ALL | Returns 404 (HTML/JSON/Text based on Accept header) |

## 🧪 Testing with Postman/Thunder Client

### Register a User
```http
POST http://localhost:3500/register
Content-Type: application/json

{
  "user": "testuser",
  "pwd": "securepassword123"
}
```

### Login
```http
POST http://localhost:3500/auth
Content-Type: application/json

{
  "user": "testuser",
  "pwd": "securepassword123"
}
```

### Create Employee
```http
POST http://localhost:3500/employees
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe"
}
```

### Get All Employees
```http
GET http://localhost:3500/employees
```

### Update Employee
```http
PUT http://localhost:3500/employees
Content-Type: application/json

{
  "id": 1,
  "firstname": "Jane",
  "lastname": "Smith"
}
```

### Delete Employee
```http
DELETE http://localhost:3500/employees
Content-Type: application/json

{
  "id": 1
}
```

## 🐛 Key Debugging Lessons

### 1. PathError: Unexpected Character in Route
**Problem**: Using regex syntax as a string in routes
```javascript
app.get('^/$|/index(.html)?', ...) // ❌ Wrong - String with regex syntax
```

**Solution**: Use proper RegExp objects
```javascript
app.get(/^\/$|\/index(.html)?$/, ...) // ✅ Correct - RegExp object
```

### 2. PathError: Missing Parameter Name
**Problem**: Using `'*'` wildcard for catch-all routes in modern Express
```javascript
app.all('*', ...) // ❌ Causes PathError in Express v5+
```

**Solution**: Use regex pattern instead
```javascript
app.all(/.*/, ...) // ✅ Works reliably across versions
```

### 3. TypeError: Argument Handler Must Be a Function
**Problem**: Case-sensitive typo in controller method name
```javascript
.get(employeesController.getAllemployees) // ❌ Wrong - lowercase 'e'
```

**Solution**: Match exact function name
```javascript
.get(employeesController.getAllEmployees) // ✅ Correct - uppercase 'E'
```

### 4. Infinite Response Time on Duplicate User
**Problem**: Setting status without sending response
```javascript
if (duplicate) return res.status(409); // ❌ No response sent
```

**Solution**: Always send a response
```javascript
if (duplicate) return res.status(409).json({ "message": "User exists" }); // ✅
```

### 5. ID Generation Bug (String Concatenation)
**Problem**: JSON IDs as strings causing concatenation instead of addition
```javascript
id: data.employees[data.employees.length - 1].id + 1 // ❌ "2" + 1 = "21"
```

**Solution**: Parse string to number first
```javascript
id: parseInt(data.employees[data.employees.length - 1].id) + 1 // ✅ 2 + 1 = 3
```

### 6. Unexpected End of JSON Input
**Problem**: Empty JSON file
```javascript
users: require('../model/users.json') // ❌ File is empty
```

**Solution**: Initialize with empty array
```json
[]
```

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

1. **MVC Architecture**: Separate concerns into Models, Controllers, and Routes
2. **Security First**: Hash passwords, use JWT, validate input, protect secrets
3. **Error Handling**: Always send proper HTTP status codes and error messages
4. **Async/Await**: Use for all asynchronous operations
5. **Environment Variables**: Never commit secrets to Git
6. **Code Organization**: Use separate files for configuration, controllers, and routes
7. **Data Validation**: Check for required fields and duplicates
8. **RESTful Design**: Follow REST conventions for API endpoints
9. **Path Handling**: Use `path.join(__dirname, ...)` for cross-platform compatibility
10. **RegExp Routes**: Use RegExp objects for complex route patterns in modern Express
11. **Content Negotiation**: Implement for better API design
12. **Proper Status Codes**: Use 200, 201, 400, 401, 404, 409, 500 appropriately

## 🔒 Security Considerations

- ✅ Passwords hashed with bcrypt (salt rounds: 10)
- ✅ JWT tokens for authentication
- ✅ Environment variables for secrets
- ✅ `.env` file excluded from Git
- ✅ CORS whitelist for origin validation
- ✅ Input validation for all endpoints
- ⚠️ **Note**: This is a learning project. For production:
  - Use a real database (MongoDB, PostgreSQL)
  - Implement refresh token rotation
  - Add rate limiting
  - Use HTTPS
  - Implement proper session management
  - Add input sanitization

## 🔗 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [JWT.io](https://jwt.io/)
- [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [path-to-regexp Documentation](https://github.com/pillarjs/path-to-regexp)
- [CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 📄 License

ISC

---

**Author**: Abdul Basit  
**Repository**: [NodeJS_ExpressJS_Backend_Tutorial](https://github.com/theabdulbasitt/NodeJS_ExpressJS_Backend_Tutorial)  
**Version**: 2.0.0
