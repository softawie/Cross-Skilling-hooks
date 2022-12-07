# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### the project tree :

src
├── App.css
├── App.js
├── App.test.js
├── BooksAPI.js
├── Router.js
├── assets
│ └── img
│ ├── 403img.svg
│ ├── 404img.svg
│ ├── index.js
│ └── systemErrorImg.svg
├── components
│ ├── NavBar.js
│ ├── book.js
│ ├── home.js
│ ├── index.js
│ ├── search.js
│ └── shelf.js
├── icons
│ ├── add.svg
│ ├── arrow-back.svg
│ └── arrow-drop-down.svg
├── index.css
├── index.js
├── loader
│ └── index.js
├── logo.svg
├── reportWebVitals.js
├── router
│ ├── common.js
│ ├── paths.js
│ └── protected.js
├── setupTests.js
└── statusPage
├── common.style.css
├── status-page.component.js
└── style.component.js

## for styles

i used css in app.css and `aphrodite` lib for StyleSheet at styles.js

## for Loader

i used `react-loader-spinner` and import loader them from it

## Routes

i departed it to three part (common and protected and public )
but cause this is small project without login so i just need to the common routes

## to increase app fast

i used React.lazy and React.Suspense
as documents >> https://reactjs.org/docs/code-splitting.html

## i used React Hooks in that project

also i handeled it before with class component

## created by @YAHIA ZAKARIA @UDACITY

regards !
