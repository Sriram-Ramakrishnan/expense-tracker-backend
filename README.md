# aws-backend

Backend for an Expense Tracker App. Uses Node and Express connecting with Amazon DynamoDB as the database to perform CRUD operations.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [Git](https://git-scm.com/) (for cloning the project)

### Installation

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/Sriram-Ramakrishnan/aws-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd aws-backend
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the Express server:

   ```bash
   npm run server
   ```

Your Express application should now be running at [http://localhost:3000](http://localhost:3000).

## Usage
API routes can be accessed at [http://localhost:3000/api/v1/](http://localhost:3000/api/v1/).
Here are the following sub routes:
- /users/: Create and find users
- /expense/: CRUD operations for expenses addition

## Configuration

Add your own DynamoDB variables in the .env file as follows:
```
AWS_ACCESS_KEY_ID=YOUR ACCESS KEY ID
AWS_SECRET_ACCESS_KEY=YOUR SECRET ACCESS KEY
region=YOUR REGION
```

