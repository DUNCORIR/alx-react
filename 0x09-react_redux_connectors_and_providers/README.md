# 0x09. React Redux Connectors and Providers

## 📌 Description

This project focuses on integrating **Redux** into a **React** application using connectors (`connect`), Redux `Provider`, asynchronous middleware (`redux-thunk`), and optimization tools like **Reselect** and **Redux DevTools**. It builds upon the foundation from previous projects involving reducers and selectors.

---

## 🧠 Learning Objectives

By the end of this project, you should be able to:

- Explain how Redux connectors (`connect`) work in a React-Redux application.
- Implement `mapStateToProps` and `mapDispatchToProps` to pass state and actions to components.
- Bind action creators (both sync and async) to components using `connect`.
- Use Redux Thunk for handling asynchronous logic like API calls.
- Set up and wrap the app with Redux `<Provider>` and configure the store.
- Improve performance of state selection using **Reselect**.
- Debug your Redux state and actions using **Redux DevTools**.

---

## ⚙️ Technologies

- React
- Redux
- React-Redux
- Redux Thunk
- Reselect
- Redux DevTools
- JavaScript (ES6+)
- Babel
- Node.js 14.x / npm 6.x
- Ubuntu 18.04 LTS

---

## 📁 Project Structure

task_0/
├── dashboard/
│ ├── components/
│ ├── containers/
│ ├── reducers/
│ ├── actions/
│ ├── App.js
│ └── ...
├── dist/
│ ├── courses.json
│ ├── login-success.json
│ └── notifications.json


--

## 🚀 Getting Started

### Install dependencies
```bash
npm install
Run the application
bash

npm start
Build for production
bash

npm run build
📦 Required Files
Make sure these are committed and pushed:

package.json

.babelrc

README.md

All source code in dashboard/ and dist/

✅ Requirements
Use Redux createStore to manage global state.

Wrap the app in a <Provider> to supply the store.

Use connect() to map state and actions to components.

Use Redux Thunk for async logic.

Use Reselect to optimize performance.

Use Redux DevTools for debugging.

🧪 Testing
Manual testing can be done by interacting with components and observing:

State updates in DevTools

Correct data rendered from Redux store

Async actions fetching and updating store properly

👨‍💻 Author
Duncan Korir

📝 License
This project is part of the ALX Frontend curriculum and is provided for educational purposes.
