# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder Structure

After you create a new project, you will see the following folder structure:
```bash
TODO/
├── node_modules/
├── public/
│ ├── index.html
├── src/
│ ├── assets/
│ │ └── images/
│ ├── components/
│ │ └── Layout/
│ │ ├── Navbar.jsx
│ │ ├── ProtectedRoute.jsx
│ ├── pages/
│ │ └── create/
│ │ ├── EditTask.jsx
│ │ ├── EnterTask.jsx
│ │ ├── index.jsx
│ │ ├── TaskCard.jsx
│ │ └── home/
│ │ ├── index.css
│ │ ├── index.jsx
│ │ └── user/
│ │ ├── SignIn.jsx
│ │ ├── SignUp.jsx
│ │ └── Done.jsx
│ ├── store/
│ │ └── slices/
│ │ ├── authSlice.js
│ │ ├── todoSlice.js
│ │ └── index.js
│ ├── App.js
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

- `node_modules/`: Contains all the dependencies of your project.
- `public/`: Contains static assets and the main HTML file.
  - `index.html`: The main HTML file.
- `src/`: Contains the source code of your application.
  - `assets/`: Contains assets like images, fonts, etc.
  - `components/`: Contains React components.
    - `Layout/`: Layout components.
      - `Navbar.jsx`: Navigation bar component.
      - `ProtectedRoute.jsx`: Component for protected routes.
  - `pages/`: Contains page components.
    - `create/`: Components for creating tasks.
      - `EditTask.jsx`: Edit task component.
      - `EnterTask.jsx`: Enter task component.
      - `index.jsx`: Index component for the create page.
      - `TaskCard.jsx`: Task card component.
    - `home/`: Components for the home page.
      - `index.css`: CSS file for the home page.
      - `index.jsx`: Main component for the home page.
    - `user/`: Components for user-related pages.
      - `SignIn.jsx`: Sign-in component.
      - `SignUp.jsx`: Sign-up component.
    - `Done.jsx`: Component for completed tasks.
  - `store/`: Redux store setup.
    - `slices/`: Redux slices.
      - `authSlice.js`: Authentication slice.
      - `todoSlice.js`: Todo slice.
    - `index.js`: Store configuration file.
  - `App.js`: Main App component.
  - `index.css`: Global CSS file.
  - `index.js`: Entry point of the React application.
  - `reportWebVitals.js`: For measuring performance.
- `.gitignore`: Specifies which files should be ignored by Git.
- `package-lock.json`: Ensures consistent dependency versions.
- `package.json`: Lists the project dependencies and scripts.
- `README.md`: This file.

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
