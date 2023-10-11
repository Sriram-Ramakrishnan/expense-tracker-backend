# aws-backend

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
   cd my-express-app
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the Express server:

   ```bash
   npm start
   ```

Your Express application should now be running at [http://localhost:3000](http://localhost:3000).


## Configuration

Add your own DynamoDB variables in the .env file as follows:
```
accessKeyId=YOUR ACCESS KEY ID
secretAccessKey=YOUR SECRET ACCESS KEY
region=YOUR REGION
endpoint=YOUR ENDPOINT
```