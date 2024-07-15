Blog CRUD API with JWT Authentication
This project is a CRUD (Create, Read, Update, Delete) API for managing blog posts, built with Express and TypeScript. The API allows users to perform various operations on blog posts, including creating, reading, updating, and deleting blogs. Additionally, it implements JWT (JSON Web Token) authentication to secure certain endpoints, ensuring that only authenticated users can create, update, or delete blog posts.

Features
Get All Blogs: Fetch a list of all blog posts.

Endpoint: GET /api/blogs/
Public: Accessible to anyone.
Get Blog by ID: Retrieve a single blog post by its ID.

Endpoint: GET /api/blogs/:id
Public: Accessible to anyone.
Create Blog: Add a new blog post.

Endpoint: POST /api/blogs/
Protected: Requires JWT authentication.
Update Blog: Modify an existing blog post by its ID.

Endpoint: PUT /api/blogs/:id
Protected: Requires JWT authentication.
Delete Blog: Remove a blog post by its ID.

Endpoint: DELETE /api/blogs/:id
Protected: Requires JWT authentication.
Authentication
JWT Authentication: The API uses JSON Web Tokens to authenticate users. Protected endpoints require a valid JWT to be included in the request headers. This ensures that only authenticated users can create, update, or delete blog posts.
Controllers and Routes
Controllers: The business logic for handling requests is encapsulated in controller functions:

getAllBlogs: Retrieves all blog posts from the database.
getBlogById: Retrieves a specific blog post by its ID.
createBlog: Adds a new blog post to the database.
updateBlog: Updates an existing blog post in the database.
deleteBlog: Deletes a blog post from the database.
Routes: The routes map HTTP methods and endpoints to the appropriate controller functions:

GET /api/blogs/: Maps to getAllBlogs.
GET /api/blogs/:id: Maps to getBlogById.
POST /api/blogs/: Maps to createBlog and requires authentication.
PUT /api/blogs/:id: Maps to updateBlog and requires authentication.
DELETE /api/blogs/:id: Maps to deleteBlog and requires authentication.
