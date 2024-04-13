# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Dharu Notes:

> npx create-react-app Netflix // npx create-react-app nameOfProject

    Project folder structure is created and all the packages were installed

> npm start/npm run start // to run the Project

SET UP Tailwind into our APP - https://tailwindcss.com/docs/guides/create-react-app

    > npm install -D tailwindcss
    > npx tailwindcss init
    Update tailwind.config.js
    Add tailwind call in index.css

# Netflix-GPT Feature

- Login/Sign UP
  - Sign In/Up form
  - redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in BG
    - Title and description
    - Movie Suggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Create Pages

- Login,Browse,Header,Body inside components folder

> npm i -D react-router-dom //for routing

    create configuration - createBrowserRouter
    Provider configuration to router - RouterProvider
    use useRouteError and show error , Outlet, Link from react-router-dom

- LoginForm - form html, useFormValidation - validate function
- Validation for form in util checkValidData - useref to take email and password value for validation and pass to checkValidData and display error message

# Authentication

- we need backend - we can use google firebase

- create Project - use analytics - create Project
- choose web and firebase hosting

Install fire base

> npm install firebase

- create configuration for firebase add it in utils

- Go to build -> authentication ->choose email/password -> enable email/password

  > npm install -g firebase-tools
  > firebase login
  > firebase init

  - firebase.json and firebase.rc file is created

  > firebase deploy

https://netflixgpt-8ded7.web.app/

- In the util add firebase.js configuration take it from firebase
- Create a password-based account - createUserWithEmailAndPassword // This will create and store user information in firebase
- Sign in a user with an email address and password - signInWithEmailAndPassword

now user information will be stored successfully and login will also be successful.

---

- To set up Redux Store
  > npm i -D @reduxjs/toolkit
  > npm i react-redux

appStore and userslice js

- onAuthStateChanged api
- updatProfile api
- SignOut api

browse should be accessed only after sign in - redirect to login is not signed in
