# [Blogging platform API](https://roadmap.sh/projects/blogging-platform-api)

A RESTful API for managing blog posts with basic CRUD functionality.

## Installation

Clone the repository and navigate to the project directory. Then, install the necessary dependencies:

```bash
npm install
```
## Build
```bash
npm run build
```
This will compile the project in dist folder. 

## Usage
```bash
node dist/main.js
```

## Features

- **Create** a new blog post
- **Read** a single or all blog posts
- **Update** an existing blog post
- **Delete** a blog post
- **Search** posts by term in title, content, or category

## Endpoints

1. **POST /posts** - Create a new blog post
2. **PUT /posts/{id}** - Update an existing post
3. **DELETE /posts/{id}** - Delete a post
4. **GET /posts/{id}** - Retrieve a single post
5. **GET /posts** - Retrieve all posts, with optional search filter

## Responses

- **201 Created** - For successful creation
- **200 OK** - For retrieval and updates
- **204 No Content** - For successful deletions
- **400 Bad Request** - For validation errors
- **404 Not Found** - For non-existing resources

