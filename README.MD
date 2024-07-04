# Blog

This is a simple Blog built with React, Node.js, Express, and MongoDB. It allows you to add, edit, and delete Blogs.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download &amp; Install Node.js](https://nodejs.org/)
- MongoDB: [Download &amp; Install MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. **Install app:**
   In your folder of project where you will build the project, open the terminal and then input the following command below, remember both of the folder is different so must be using "cd ../" to out of the current working directory to create a new folder.

```bash
    mkdir client
    cd client
   npm i react
```

Create your nodejs express app

```bash
    cd ../
    mkdir server
    cd server
    npm init -y
```

2. **Install dependencies:**

   ```bash
   cd client
   npm install axios react-router-dom
   cd ../server
   npm init -y
   npm install express mongoose cors body-parser dotenv
   ```

## Configuration

1. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following variables:

   ```
   PORT=8000
   MONGODB_URI=your-mongodb-url
   ```

 Create a `.env` file in the `client` directory with the following variables:

```
   REACT_APP_BASE_URL=http://your_domain:8000/
```

   Replace `your_domain` with domain, if you run as local, you will set it is localhost.

### Important Note for API Configuration

When configuring the API base URL in your environment variables, ensure that the URL points to the correct port where your backend server is running. For example, if your backend server is running on port 5000, the VITE_API_BASE_URL in your client directory should be set to http://localhost:5000. Incorrect configuration can lead to errors, such as Axios returning a "Network Error" with the name "AxiosError" and code "ERR_NETWORK". This typically occurs when the frontend application fails to establish a network connection with the backend server due to incorrect URL configuration or server unavailability.

## Usage

- **View Blog List:** Navigate to the home page to view the list of blogs.
- **Add Blog:** Click on the "Add New blog" button to add a new blog.
- **Edit Blog:** Click on the "Edit" link next to an blog to edit their details.
- **Delete Blog:** Click on the "Delete" button next to an blog to delete them.
