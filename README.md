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

# Did i stopped working on this project?

I did NOT fully stop the project, probably i will continue to work on it when i get some free time from college however, i'm willing to focus on other languages like Go, Rust or C++, there's also some other JS frameworks getting my attention like SOLID, NestJS and Svelte.

Developing pulseconnect using NextJS as the framework for frontend also caused some issues that i've only noticed when i was already deep on the project. Let's say that using a framework that has caching as its main premise for a mostly dynamic project did not work well, there was a lot of refactoring, re-dos and moments where i just wanted to delete this repository.

And this was completely my fault. I did not have the knowledge of what nextJS was able to do for me.

I've learned so much with this project and maybe on the future i can come back to this and continue to implement missing features like Unit testing and Infinite scroll.
