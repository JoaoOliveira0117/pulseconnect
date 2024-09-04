# About Pulseconnect

[Project Kanban](https://www.notion.so/786a5c88e77f4d06b7b3aae1cca701cc?pvs=21)


Pulseconnect is a application that aims to give a twitter-like experience for its users, this is a study project without monetization objectives. This monorepo includes all code and packages needed to fully run the application, see more on the  `How to run the application?` section below.

# Technologies being used

This project is mainly developed with Javascript using: 
- NodeJS, ExpressJS, multer for backend;
- NextJS, ReactJS, tailwind for frontend;
- PostgreSQL 16 for database;
- Docker for container management;

# How to run the application?

---

First of all, make sure you have the following applications/packages installed:

- Docker;
- Node Package Manager;

## Backend:

```bash
# API folder
cd api

# Execute the script to build, execute migrations and run the containers:
npm run docker:up
# OR
yarn docker:up
```

## Frontend

```bash
# APP folder
cd app

# Install project dependencies
npm install
# OR
yarn

# Run the project
npm run dev
# OR
yarn dev
```
