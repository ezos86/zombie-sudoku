# Zombie Sudoku

Zombie Sudoku is a game where you can play [here](http://zombie.herokuapp.com).

## Rules

The more you play and the harder the difficulty, the more points you build up to make it to the top fo the leaderboard. It's free to register and play. 

## Project Plan

The goal is to break down work into tasks. To make it simple, I didn't break down each thing into a lot of detail, but the detail would be written out more in the ticket, and the ticket size would be a little large for some of these items, such as Menu & Game, that would be separate in a normal project. 

- IEN-1 App Setup
- IEN-2 Auth Services
- IEN-3 Menu and Game
- IEN-4 Leaderboard
- IEN-5 Bugs
- IEN-6 Deployment
- IEN-7 Cleanup And Misc

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **build**                 | Contains the distributable (or output) from your TypeScript build.                            |
| **node_modules**         | Contains all npm dependencies                                                                 |
| **src**                  | Contains source code that will be compiled to the dist dir                                    |
| **src/app**           | Main react application folder
| **src/components**      | Components to be used in application. 
| **src/services**      | Services such as auth and storage
| **src/assets**      | Images, documents, audio.
| **src/utilities**      | Common functions for parsing data.
| **src/layout**      | Navigation, view wrappers, etc.
| **src/views**          | Views or layout components that will essentially be represented by router. 
| **src/styles**      | The styles for base and components
| **src/tests**      | The test suite to test the react application. Includes setup for enzyme and mocks.
| **src/public/index.html**           | The entry point for application.                      
| **src/App.tsx**        | The main react application   |


## Variable Control
Consitency amongst file, function and variable names makes it easier to search the codebase when looking for a file, value, or function. It can quickly be understood based on the case, rather it's a function or variable if we follow these assignment rules.

- *File names* should include the target file type: ex: hello-world.view.ts or hello-world.controller.ts
- *Variable/Function names* should be in lower camel case: ex: getPredictionData or updateUser
- *Data storage* should be snake case, such as game_status (typically used for local storage)
- *Class names* should be Pascal case.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

